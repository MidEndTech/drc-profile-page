const ValidateField = (name, value) => {
    const errors = {};
  
    switch (name) {
      case "user_email":
        if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i.test(
            value
          )
        ) {
          errors.user_email = "يجب إدخال الإيميل بهذا الشكل (name@example.example)";
        }
        break;
      default:
        break;
    }
    
    return errors;
  };
  
  export default ValidateField;
  