/* eslint-disable prettier/prettier */
import ImagePicker from 'react-native-image-crop-picker';
import { Alert } from 'react-native';



  const reqObject = {
    width: 300,
    height: 400,
    cropping: true,
    includeBase64: true,
    cropperCircleOverlay: true,
    freeStyleCropEnabled: true,


};
const handleCameraLaunch = (setSelectedImage) => {
  ImagePicker.openCamera(reqObject).then(image => {
    const photo = `data:${image.mime};base64,${image.data}`;
    setSelectedImage(photo);
    })
      .catch(err => {console.log(err);});
      cleanUp();
}

const openImagePicker = (setSelectedImage) => {
  ImagePicker.openPicker(reqObject).then(image => {
        const photo = `data:${image.mime};base64,${image.data}`;
        setSelectedImage(photo);
      })
      .catch((err) =>{
        console.log(err);
        cleanUp();
      });
  }
  const cleanUp = () => {
    ImagePicker.clean().then(() => {
        console.log('removed all tmp images from tmp directory');
      }).catch(e => {
        Alert.alert(e);
      });
  }

  export {openImagePicker, handleCameraLaunch};
  

