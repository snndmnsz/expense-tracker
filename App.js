import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import ManageExpense from "./screens/ManageExpense";
import { GlobalStyles } from "./constants/style";
import { Ionicons } from "@expo/vector-icons";
import IconButtonAdd from "./components/ui/IconButton";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import * as NavigationBar from "expo-navigation-bar";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ExpensesOvewiew() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary,
          shadowColor: "transparent",
        },
        headerTintColor: "white",
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary,
          borderColor: GlobalStyles.colors.primary,
          shadowColor: "transparent",
          borderTopWidth: 0,
          borderBottomWidth: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        tabBarActiveTintColor: GlobalStyles.colors.quaternary,
        headerRight: () => {
          return (
            <IconButtonAdd
              name="add-outline"
              size={27}
              color="white"
              mr={25}
              onPress={() => navigation.navigate("ManageExpense")}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          tabBarLabel: "Recent",
          title: "Recent Expenses",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "albums" : "albums-outline"}
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          tabBarLabel: "Expenses",
          title: "All Expenses",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "wallet" : "wallet-outline"}
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  NavigationBar.setBackgroundColorAsync(GlobalStyles.colors.primary);

  return (
    <>
      <Provider store={store}>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary,
              },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="ExpensesOvewiew"
              component={ExpensesOvewiew}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
