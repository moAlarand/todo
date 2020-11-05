import React from 'react';
import {Formik, FormikHelpers} from 'formik';
import * as yup from 'yup';
import {Todo} from '../models/Todos';
import {StyleSheet, View} from 'react-native';
import {styles as cStyles, AppInput, AppButton} from '../common';
import {appColors} from '../common/Theme/colors';
import {Navigation} from 'react-native-navigation';

interface formProps {
  onSumbit: (todo: string) => void;
}

export const TodoForm: React.FC<formProps> = (props) => {
  const {onSumbit} = props;
  const initialValues: Partial<Todo> = {text: ''};
  const validateYupSchema = yup.object().shape({
    text: yup.string().required(),
  });

  const _onSumbit = (
    values: Partial<Todo>,
    {resetForm}: FormikHelpers<Partial<Todo>>,
  ) => {
    if (values.text) {
      onSumbit(values.text);
      resetForm();
    }
  };

  return (
    <Formik
      validationSchema={validateYupSchema}
      initialValues={initialValues}
      onSubmit={_onSumbit}>
      {({values, handleBlur, touched, errors, handleChange, handleSubmit}) => (
        <View style={styles.container}>
          <AppInput
            value={values.text}
            onBlur={handleBlur('text')}
            onChangeText={handleChange('text')}
            placeholder="text"
            error={touched.text ? errors.text : ''}
            style={styles.input}
            errorStyle={styles.error}
          />
          <AppButton
            style={{flex: 1}}
            title="add to do"
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    padding: 10,
    borderRadius: 10,
    ...cStyles.shadow,
  },
  input: {
    flex: 2,
    alignSelf: 'stretch',
    padding: 10,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: appColors.primary,
  },
  error: {
    alignSelf: 'stretch',
    marginHorizontal: 10,
  },
});
