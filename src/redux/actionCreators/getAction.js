export const getAction = (type, {name = 'payload', fn} = {}) => 
  payload => {
    if (fn) fn(payload);
    return { type, [name]: payload };
  }
