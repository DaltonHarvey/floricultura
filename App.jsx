import React, { useState } from 'react';
import Routes from './src/routes';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { mocks } from './src/constrants';

const IMAGES = mocks.images;

export default function App(props) {

  const [ isLoadingComplete, setIsLoadingComplete ] = useState(false); 

  async function handlerResorcesAysnc() {
    const cacheImages = IMAGES.map(img => {
      return Asset.fromModule(img).downloadAsync();
    })
    return Promise.all(cacheImages);
  }

  if(isLoadingComplete && 
    props.skipLoadingScreen
    ) {
    return (
      <>
        <AppLoading
          startAsync={ handlerResorcesAysnc }
          onError={error => console.warn(error)}
          onFinish={() => setIsLoadingComplete(true)}
        />
      </>
    );
  }
  return (
    <>
      <Routes/>
    </>
  );
}

