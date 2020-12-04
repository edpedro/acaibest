function capitalize(name) {
  if (typeof name !== 'string') {
    return '';
  }
  return name.charAt(0).toUpperCase() + name.substr(1);
}

module.exports = capitalize;
