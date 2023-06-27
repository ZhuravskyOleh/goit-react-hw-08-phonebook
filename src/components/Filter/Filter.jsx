import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import MUI from 'components/MUI';

function Filter() {
  const dispatch = useDispatch();
  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value.toLowerCase().trim()));
  };
  return (
    <>
      <MUI.Box mt={3}>
        <MUI.TextField
          fullWidth
          id="filter"
          type="text"
          name="filter"
          label='Find contacts'
          onChange={handleChangeFilter}
        />
      </MUI.Box>
    </>
  );
}

export default Filter;
