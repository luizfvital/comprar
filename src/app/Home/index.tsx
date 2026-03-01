import { Image, View } from "react-native"

import { Button } from "@/app/components/Button"
import { Input } from "@/app/components/Input"

import { styles } from "./styles"


 
export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar" />
        <Button title="Entrar" />
      </View>

      <View style={styles.content}></View>
    </View>
  );
}