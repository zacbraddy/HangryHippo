const getElement = wrapper => elementType => classToSearchFor => (
  wrapper.find(elementType).findWhere(e => e.props().className && e.props().className.indexOf(classToSearchFor) !== -1)
);

export default getElement;
