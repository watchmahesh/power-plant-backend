
import { checkSchema, ValidationChain, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

 const batteryValidation: ValidationChain[] = checkSchema({
    'batteries': {
        isArray: {
            errorMessage: 'Batteries should be an array',
        },
        custom: {
            options: (value) => {
                if (!Array.isArray(value)) {
                    throw new Error('Batteries should be an array');
                }
                return true;
            },
        },
    },
    'batteries.*.name': {
        isString: {
            errorMessage: 'Name should be a non-empty string',
        },
        notEmpty: {
            errorMessage: 'Name should be a non-empty string',
        },
    },
    'batteries.*.postcode': {
        notEmpty: {
            errorMessage: 'Postcode should be a non-empty string',
        },
        isNumeric: {
            errorMessage: 'Postcode should be a number',
        },

    },
    'batteries.*.wattCapacity': {
        notEmpty: {
            errorMessage: 'Postcode should be a non-empty string',
        },
        isNumeric: {
            errorMessage: 'WattCapacity should be a number',
        },
    },
});

 const handleBatteryValidationErrors = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);
        const uniqueErrorMessages = [...new Set(errorMessages)];
        const errorResponse = {
          ok: false,
          status: 400,
          message: uniqueErrorMessages,
          data: {},
        };
        return res.status(400).json(errorResponse);
      }
      next();
};

export const batteryValidator = [
    ...batteryValidation,
    handleBatteryValidationErrors,
  ];
