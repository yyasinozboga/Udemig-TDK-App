import {Pressable, StyleSheet} from 'react-native';
import SvgFavorite from '../icons/Favorite';
import {colors} from '../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {
  addDataToSaved,
  deleteDataFromSaved,
  getDataFromSaved,
} from '../redux/actions/savedActions';
import {useEffect} from 'react';

const SaveButton = ({madde, madde_id, type}) => {
  const {data} = useSelector(store => store.saved);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFromSaved());
  }, []);

  const handleClick = () => {
    const found = data.find(data => data.id === madde_id);
    if (found) {
      dispatch(deleteDataFromSaved(madde_id));
    } else {
      const data = {
        id: madde_id,
        title: madde,
        type,
      };

      dispatch(addDataToSaved(data));
    }
  };

  return (
    <Pressable style={styles.button} onPress={handleClick}>
      <SvgFavorite color={colors.textLight} width={25} />
    </Pressable>
  );
};

export default SaveButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
