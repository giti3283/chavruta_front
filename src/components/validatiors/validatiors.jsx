// Validation utilities for Chavruta application

import { useEffect, useState } from "react";

export const validators = {
    // Israeli ID validation
    israeliId: (id) => {
      if (!id || id.length !== 9) return false;
      
      const digits = id.split('').map(Number);
      let sum = 0;
      
      for (let i = 0; i < 9; i++) {
        let digit = digits[i];
        if (i % 2 === 1) {
          digit *= 2;
          if (digit > 9) digit -= 9;
        }
        sum += digit;
      }
      
      return sum % 10 === 0;
    },
  
    // Israeli phone number validation
    israeliPhone: (phone) => {
      const phoneRegex = /^05\d{8}$/;
      return phoneRegex.test(phone);
    },
  
    // Email validation
    email: (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
  
      // Age validation
  age: (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    const age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age >= 13 && age <= 120;
  },

  // Name validation (Hebrew and English)
  name: (name) => {
    const nameRegex = /^[\u0590-\u05FFa-zA-Z\s]{2,30}$/;
    return nameRegex.test(name);
  },

  // Required field validation
  required: (value) => {
    return value && value.toString().trim().length > 0;
  },

  // Minimum length validation
  minLength: (value, min) => {
    return value && value.toString().length >= min;
  },

  // Maximum length validation
  maxLength: (value, max) => {
    return value && value.toString().length <= max;
  }
};

export const validationMessages = {
  he: {
    israeliId: {
      invalid: 'מספר תעודת זהות לא תקין',
      required: 'נדרש מספר תעודת זהות',
      format: 'תעודת זהות חייבת להכיל 9 ספרות'
    },
    israeliPhone: {
      invalid: 'מספר טלפון לא תקין',
      required: 'נדרש מספר טלפון',
      format: 'מספר טלפון חייב להתחיל ב-05 ולהכיל 10 ספרות'
    },
    email: {
      invalid: 'כתובת אימייל לא תקינה',
      required: 'נדרשת כתובת אימייל',
      format: 'אנא הזן כתובת אימייל תקינה'
    },
    name: {
      invalid: 'שם לא תקין',
      required: 'נדרש שם',
      format: 'שם חייב להכיל בין 2-30 תווים בעברית או אנגלית'
    },
    age: {
      invalid: 'גיל לא תקין',
      required: 'נדרש תאריך לידה',
      range: 'גיל חייב להיות בין 13-120'
    },
    required: 'שדה חובה',
    minLength: (min) => `נדרשים לפחות ${min} תווים`,
    maxLength: (max) => `מקסימום ${max} תווים`
  },
  en: {
    israeliId: {
      invalid: 'Invalid Israeli ID number',
      required: 'Israeli ID is required',
      format: 'ID must contain exactly 9 digits'
    },
    israeliPhone: {
      invalid: 'Invalid phone number',
      required: 'Phone number is required',
      format: 'Phone number must start with 05 and contain 10 digits'
    },
    email: {
      invalid: 'Invalid email address',
      required: 'Email address is required',
      format: 'Please enter a valid email address'
    },
    name: {
      invalid: 'Invalid name',
      required: 'Name is required',
      format: 'Name must contain 2-30 characters in Hebrew or English'
    },
    age: {
      invalid: 'Invalid age',
      required: 'Birth date is required',
      range: 'Age must be between 13-120'
    },
    required: 'Required field',
    minLength: (min) => `At least ${min} characters required`,
    maxLength: (max) => `Maximum ${max} characters`
  }
};

export const validateField = (fieldName, value, language = 'he') => {
  const messages = validationMessages[language];
  
  switch (fieldName) {
    case 'id':
      if (!validators.required(value)) {
        return { isValid: false, message: messages.israeliId.required };
      }
      if (!validators.israeliId(value)) {
        return { isValid: false, message: messages.israeliId.invalid };
      }
      return { isValid: true, message: '' };

    case 'firstName':
    case 'lastName':
      if (!validators.required(value)) {
        return { isValid: false, message: messages.name.required };
      }
      if (!validators.name(value)) {
        return { isValid: false, message: messages.name.format };
      }
      return { isValid: true, message: '' };

    case 'cellularTelephone':
      if (!validators.required(value)) {
        return { isValid: false, message: messages.israeliPhone.required };
      }
      if (!validators.israeliPhone(value)) {
        return { isValid: false, message: messages.israeliPhone.format };
      }
      return { isValid: true, message: '' };

    case 'email':
      if (!validators.required(value)) {
        return { isValid: false, message: messages.email.required };
      }
      if (!validators.email(value)) {
        return { isValid: false, message: messages.email.format };
      }
      return { isValid: true, message: '' };

    case 'birthDate':
      if (!validators.required(value)) {
        return { isValid: false, message: messages.age.required };
      }
      if (!validators.age(value)) {
        return { isValid: false, message: messages.age.range };
      }
      return { isValid: true, message: '' };

    default:
      if (!validators.required(value)) {
        return { isValid: false, message: messages.required };
      }
      return { isValid: true, message: '' };
  }
};

export const validateForm = (formData, requiredFields, language = 'he') => {
  const errors = {};
  let isValid = true;

  requiredFields.forEach(field => {
    const validation = validateField(field, formData[field], language);
    if (!validation.isValid) {
      errors[field] = validation.message;
      isValid = false;
    }
  });

  return { isValid, errors };
};

// Real-time validation hook
export const useFieldValidation = (fieldName, value, language = 'he') => {
  const [validation, setValidation] = useState({ isValid: true, message: '' });

  useEffect(() => {
    if (value) {
      const result = validateField(fieldName, value, language);
      setValidation(result);
    } else {
      setValidation({ isValid: true, message: '' });
    }
  }, [fieldName, value, language]);

  return validation;
};

  