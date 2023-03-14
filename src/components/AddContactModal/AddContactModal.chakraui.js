export const phoneInputStyle = {
  id: "number",
  type: "tel",
  name: "number",
  pattern: "+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",
  title:
    "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",
  required: true,
};

export const nameInputStyle = {
  id: "Name",
  name: "name",
  pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
  title:
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  required: true,
};

export const emailInputStyle = {
  id: "email",
  name: "email",
  type: "email",
  required: true,
};
