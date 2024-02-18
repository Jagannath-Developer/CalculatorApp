import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../style/color";

interface IButton {
  label: string;
  bgColor?: string;
  setText: (label: string) => void;
}

const Button: React.FC<IButton> = ({ label, bgColor, setText }: IButton) => (
  <TouchableOpacity
    style={[styles.btn, { backgroundColor: bgColor }]}
    onPress={() => setText(label)}
  >
    <Text style={styles.btnText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.TEXT_COLOR,
  },
});

export default Button;
