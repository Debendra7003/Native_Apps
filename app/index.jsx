import { Text,View } from "react-native";

const Index = () => {
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#fa9930ff' 
      }}>
      <Text style={{
        fontSize: 30, 
        fontWeight: "800" }
        }>Hello world!</Text>
    </View>
  );
};
export default Index;