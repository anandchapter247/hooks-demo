import * as Yup from 'yup';
import { languageTranslation } from '../helpers';
import { ILoginInterface, ISignupInterface } from '../interfaces/Auth';
import { mobMin, mobMax } from '../config';

export const LoginValidationSchema: Yup.ObjectSchema<Yup.Shape<
  object,
  ILoginInterface
>> = Yup.object().shape<ILoginInterface>({
  userName: Yup.string().required('Username is required'),
  password: Yup.string()
    .min(6, languageTranslation('MIN_LENGTH_PASSWORD'))
    .required(languageTranslation('REQUIRED_PASSWORD'))
});

export const SignupValidationSchema: Yup.ObjectSchema<Yup.Shape<
  object,
  ISignupInterface
>> = Yup.object().shape<ISignupInterface>({
  email: Yup.string()
    .trim()
    .email(languageTranslation('VALID_EMAIL'))
    .required(languageTranslation('REQUIRED_EMAIL')),
  firstName: Yup.string()
    .trim()
    .min(3, languageTranslation('NAME_MINLENGTH'))
    .max(20, languageTranslation('FIRSTNAME_MAXLENGTH'))
    .required(languageTranslation('FIRSTNAME_REQUIRED')),
  lastName: Yup.string()
    .trim()
    .min(3, languageTranslation('NAME_MINLENGTH'))
    .max(20, languageTranslation('LASTNAME_MAXLENGTH'))
    .required(languageTranslation('LASTNAME_REQUIRED')),
  userName: Yup.string()
    .trim()
    .required(languageTranslation('USERNAME_REQUIRED')),
  mobileNumber: Yup.mixed()
    .test(
      'check-num',
      languageTranslation('MOB_NUMERROR'),
      value => !value || (value && !isNaN(value))
    )
    .test(
      'num-length',
      languageTranslation('MOB_MAXLENGTH'),
      value =>
        !value || (value && value.length >= mobMin && value.length <= mobMax)
    ),
  phoneNumber: Yup.mixed()
    .required("Phone number is required")
    .test(
      'check-num',
      languageTranslation('PHONE_NUMERROR'),
      value => !value || (value && !isNaN(value))
    )
    .test(
      'num-length',
      languageTranslation('PHONE_MAXLENGTH'),
      value =>
        !value || (value && value.length >= mobMin && value.length <= mobMax)
    )
});
