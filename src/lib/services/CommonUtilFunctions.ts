export const capitalizeFirstLetter = (value: string) => {
  return value.charAt(0).toUpperCase() + value.substring(1);
};

export function passwordTest(str: string, reg?: string) {
  const standardRegex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  const regex = new RegExp(reg ? reg : standardRegex);
  return regex.test(str)
}

export function usernameTest(str: string, reg?: string) {
  const standardRegex = "^[ A-Za-z0-9_-]*$";
  const regex = new RegExp(reg ? reg : standardRegex);
  return regex.test(str)
}

export function jsonTest(str: string) {
  try {
    JSON.parse(str);
  } catch (error) {
    return false;
  }
  return true;
}
