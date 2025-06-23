import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { COLORS } from '../constants/colors.js'

const SafeScreen = ({children}) => {
    const insets = useSafeAreaInsets()
  return (
    /* Now this component will add safe area insets to the top of the screen and make it look good there will be no white space at the top or bottom */
    <View style={{
        paddingTop: insets.top,flex: 1, backgroundColor: COLORS.background,}}>
     {children}
    </View>
  )
}

export default SafeScreen