function telephoneCheck(str) {

  let validNumber = /^(1\s|1)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  let check = validNumber.test(str);

  if (check==true) {
  return true;
  }
  return false;
}

telephoneCheck("555-555-5555");
