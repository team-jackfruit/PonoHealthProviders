import SimpleSchema from 'simpl-schema';
import { DataValues as Data } from '../../api/userData/userData';

const UserFormSchema = new SimpleSchema({
  firstName: { label: 'First Name', type: String },
  lastName: { label: 'Last Name', type: String },
  email: { label: 'Email', type: String },
  phone: {
    label: 'Phone Number', type: String, optional: true,
  },
  address: {
    label: 'Address', type: String, optional: true,
  },
  status: {
    label: 'Insurance Status', type: String, allowedValues: Data.insuranceStatus,
  },

});

export { UserFormSchema };
