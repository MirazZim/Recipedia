import { Slot } from "expo-router";
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { ClerkProvider } from '@clerk/clerk-expo'
import SafeScreen from '../components/SafeScreen'

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>

    </ClerkProvider>
  )
}
