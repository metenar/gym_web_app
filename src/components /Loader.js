import {InfinitySpin} from 'react-loader-spinner'
import { Stack } from "@mui/material"

const Loader = () => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" width="100%">
        <InfinitySpin color="gray"/>
    </Stack>
  )
}

export default Loader