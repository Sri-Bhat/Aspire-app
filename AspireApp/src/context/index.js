import React, {useState, createContext} from 'react';

export const AspireContext = createContext();
const AspireConsumer = AspireContext.Consumer;

const AspireContextProvider = props => {
  // Future Note: setting state Global variable which can be accessable at any place.
  const [state, setState] = useState({
    // Future note: Data can be added Here as new key here:
    spentLimit: null,
  });

  const saveSpentLimit = value => {
    setState(prevState =>
      setState({
        ...prevState,
        spentLimit: value,
      }),
    );
  };

  // Future note: Rest data handlers can be wrapped here:
  const dataHandlers = {
    saveSpentLimit,
  };

  return (
    <AspireContext.Provider value={{...state, dataHandlers}}>
      {props.children}
    </AspireContext.Provider>
  );
};

export {AspireConsumer};

export default AspireContextProvider;
