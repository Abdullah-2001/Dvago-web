import { enqueueSnackbar } from 'notistack'
import { addToCart } from '../store/cart/cartSlice'
import { useDispatch } from 'react-redux'

const useActions = () => {
  const dispatch = useDispatch()
  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
    enqueueSnackbar('Added to cart', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
    })
  }
  return { handleAddToCart }
}

export default useActions