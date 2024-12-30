import { StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Image } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ImageSourcePropType, FlatList } from "react-native";
import Databases from "../../interfaces/Databases";
import { useState, createRef } from "react";
import {
  Dropdown,
  Button,
  Text as TextMagnus,
  Drawer,
} from "react-native-magnus";
import {} from "react-native-magnus";

const drawerRef = createRef();

const databases: Databases[] = [
  {
    name: "Freshshop",
    type: "mongodb",
    lastBackup: "2023/11/23 19:55",
    isCheck: true,
  },
  {
    name: "ShopEasy",
    type: "postgresql",
    lastBackup: "2023/11/22 14:30",
    isCheck: false,
  },
  {
    name: "QuickCart",
    type: "mysql",
    lastBackup: "2023/11/21 11:15",
    isCheck: true,
  },
  {
    name: "EcoStore",
    type: "mysql",
    lastBackup: "2023/11/20 09:00",
    isCheck: false,
  },
  {
    name: "GroceryPal",
    type: "mongodb",
    lastBackup: "2023/11/19 16:45",
    isCheck: true,
  },
  {
    name: "GroceryPal",
    type: "mongodb",
    lastBackup: "2023/11/19 16:45",
    isCheck: true,
  },
];

const mongodb = require("../../assets/images/mongodb.png");
const mysql = require("../../assets/images/mysql.png");
const postgresql = require("../../assets/images/postgresql.png");

function getImage(
  type: "mongodb" | "mysql" | "postgresql"
): ImageSourcePropType {
  switch (type) {
    case "mongodb":
      return mongodb;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
  }
}

const DatabaseCart = ({ database }: any) => {
  return (
    <View className="bg-white   dark:bg-[#1E293B] py-4 px-2 rounded-xl flex flex-row items-center shadow-lg shadow-black  cursor-pointer border border-[#E2E8F0] dark:border-[#334155] gap-2 w-[90%]">
      <View className="justify-center mx-auto  bg-transparent ">
        <Image
          source={getImage(database.type)}
          className=" w-16 h-16 object-fill"
        />
      </View>
      <View className=" flex flex-1 bg-transparent ">
        <Text className=" block font-bold text-xl text-[#0F172A] dark:text-white">
          {database.name}
        </Text>
        <View className="flex flex-row items-center mt-1 bg-transparent">
          <View
            className={`h-2 w-2 rounded-full bg-emerald-400 mx-1 my-auto ${
              !database.isCheck && " hidden "
            } `}
          ></View>
          <Text className="text-sm text-[#64748B] dark:text-[#94A3B8]">
            Última copia: {database.lastBackup}
          </Text>
        </View>
      </View>
      <View className=" bg-transparent">
        <MaterialIcons name="keyboard-arrow-right" size={36} color="black" />
      </View>
    </View>
  );
};

const renderHeader = () => {
  return (
    <View className=" p-5 bg-transparent rounded-lg w-full">
      <Text className=" font-bold text-3xl text-green-500 ">My Databases </Text>
      <Text className=" text-gray-500">
        Gestiona y monitorea tus copias de seguridad
      </Text>
    </View>
  );
};

export default function TabOneScreen() {
  const [isAsideOpen, setAsideOpen] = useState(false);
  const toggleAside = () => {
    setAsideOpen(!isAsideOpen);
  };

  return (
    <View className=" w-full h-full bg-transparent">
      <Drawer ref={drawerRef} />

      <Button
        onPress={() => {
          if (drawerRef.current) {
            drawerRef.current.open();
          }
        }}
      >
        Open Drawer
      </Button>

      <FlatList
        data={databases}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }: any) => <DatabaseCart database={item} />}
        contentContainerStyle={{
          alignItems: "center",
          gap: 30,
          flexGrow: 1, // Asegura que el contenido ocupe todo el espacio disponible
          paddingVertical: 20, // Aquí se agrega el padding
        }}
        className="  bg-transparent "
      />
    </View>
  );
}

// <View className=" flex flex-col gap-3 justify-center items-center my-3 py-3 px-4 bg-transparent">

// </View>
