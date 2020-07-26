import {FormInstance, RuleObject} from 'antd/lib/form';

export const validatePassword = (form: FormInstance, dependencieField: string) => ({
  validator(_: RuleObject, value: any) {
    if (!value || form.getFieldValue(dependencieField) === value) {
      return Promise.resolve();
    }
    return Promise.reject('The two passwords that you entered do not match!');
  }
});
