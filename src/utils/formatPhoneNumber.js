export function formatPhoneNumber(value) {
  if (value === '') return value;

  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength === 4) {
    return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1)}`;
  }
  if (phoneNumberLength > 4 && phoneNumberLength < 8) {
    return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(
      1,
      4
    )} ${phoneNumber.slice(4, 8)}`;
  }
  if (phoneNumberLength < 10) {
    return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(
      1,
      4
    )} ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 10)}`;
  }

  if (phoneNumberLength < 12) {
    return `${phoneNumber.slice(0, 1)} ${phoneNumber.slice(
      1,
      4
    )} ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(
      7,
      9
    )}-${phoneNumber.slice(9)}`;
  }

  return phoneNumber;
}
