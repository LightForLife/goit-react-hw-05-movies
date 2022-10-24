import { Formik, Form, Field } from 'formik';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (value, _) => {
    if (value.search.trim() === '') {
      alert('Введите текст');
      //   toast.error(`Please enter text to search`);
      return;
    }

    onSubmit(value.search.trim());
    // actions.resetForm();
  };

  return (
    <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
      <header>
        <Form>
          <Field
            // className={css.search__input}
            type="text"
            placeholder="Search movies"
            name="search"
            autoComplete="off"
          />
          <button
            type="submit"
            // disabled={isSubmitting}
          >
            Search
          </button>
        </Form>
      </header>
    </Formik>
  );
};
