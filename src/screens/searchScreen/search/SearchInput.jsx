import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from 'react-native';
import SvgSearch from '../../../icons/Search';
import styles from './styles';
import {colors} from '../../../utils/constants';
import SvgClose from '../../../icons/Close';
import React from 'react';

const SearchInput = ({
  setText,
  text,
  getResults,
  isFocused,
  setIsFocused,
  setData,
}) => {
  const handleSubmit = () => {
    if (text.trim !== '') {
      getResults(text);
    }
  };

  const handleClose = () => {
    setIsFocused(false);
    Keyboard.dismiss();
  };

  const handleClear = () => {
    setData(null);
    setText('');
  };

  return (
    <View
      style={{
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
      }}>
      <TouchableWithoutFeedback onPress={handleClose}>
        <View
          style={[
            styles.inputContainer,
            {
              borderColor: isFocused ? colors.red : 'transparent',
              width: isFocused ? '80%' : '100%',
              marginTop: 5,
            },
          ]}>
          <TextInput
            style={{
              ...styles.input,
              paddingLeft: text !== '' ? 15 : 50,
            }}
            placeholder="Türkçe Sözlük'te Ara"
            onChangeText={e => setText(e)}
            value={text}
            onFocus={() => setIsFocused(true)}
            onSubmitEditing={handleSubmit}
            placeholderTextColor={colors.textMedium}
          />

          {text === '' ? (
            <TouchableOpacity style={{...styles.button, left: 0}}>
              <SvgSearch color={colors.textMedium} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{...styles.button, right: 0}}
              onPress={handleClear}>
              <SvgClose color={colors.textMedium} />
            </TouchableOpacity>
          )}
        </View>
      </TouchableWithoutFeedback>

      {isFocused && (
        <TouchableOpacity onPress={handleClose}>
          <Text>Vazgeç</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default React.memo(SearchInput);
