import React, {useState, createContext} from 'react';

// This context can be used as Global context for data handling.

export const AspireContext = createContext();
const AspireConsumer = AspireContext.Consumer;

const AspireContextProvider = props => {
  // Future Note: setting state Global variable which can be accessable at any place.
  const [state, setState] = useState({
    // Future note: Data can be added Here as new key here:
    spentLimit: null,
    isLimitSet: false,
  });

  const saveSpentLimit = value => {
    setState(prevState =>
      setState({
        ...prevState,
        spentLimit: value,
        isLimitSet: true,
      }),
    );
  };

  const manageLimitSetting = flag => {
    setState(prevState =>
      setState({
        ...prevState,
        isLimitSet: flag,
      }),
    );
  };

  // Future note: Rest data handlers can be wrapped here:
  const dataHandlers = {
    saveSpentLimit,
    manageLimitSetting,
  };

  return (
    <AspireContext.Provider value={{...state, dataHandlers}}>
      {props.children}
    </AspireContext.Provider>
  );
};

export {AspireConsumer};

export default AspireContextProvider;
