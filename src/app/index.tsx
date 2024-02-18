import React, { FC, useCallback, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, TextInput, Text } from "react-native";
import Button from "../components/button";
import { COLORS } from "../style/color";

const index: FC = (): JSX.Element => {
  const [result, setResult] = useState("0");
  const [expression, setExpression] = useState("");
  const memorizedText = (id: string) => {
    if (checkOperator(id)) {
      setExpression((prev) => prev + id);
      console.log(expression);
    }
  };
  const checkOperator = (id: string) => {
    const lastValue = expression[expression.length - 1];
    if (
      lastValue === "+" ||
      lastValue === "-" ||
      lastValue === "X" ||
      lastValue === "÷" ||
      lastValue === "%"
    ) {
      if (id === "+" || id === "-" || id === "X" || id === "÷" || id === "%") {
        return false;
      }
    } else {
      const total = eval(expression);
      setResult(total);
      return true;
    }
    return true;
  };
  const handleAllClear = () => {
    setExpression("");
  };
  const handleClear = () => {
    const balanceText = expression.slice(0, expression.length - 1);
    setExpression(balanceText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultWrapper}>
        <TextInput
          style={[styles.input]}
          value={expression}
          cursorColor="#8ad8d1"
          autoFocus={true}
          showSoftInputOnFocus={false}
          multiline
        />
        <Text style={styles.result}>{result}</Text>
      </View>

      <View style={styles.rowWrapper}>
        <View style={styles.colWrapper}>
          <Button
            label="AC"
            bgColor={COLORS.BUTTON_BG_LIGHT}
            setText={handleAllClear}
          />
          <Button
            label="C"
            bgColor={COLORS.BUTTON_BG_LIGHT}
            setText={handleClear}
          />
          <Button
            label="%"
            bgColor={COLORS.BUTTON_BG_LIGHT}
            setText={memorizedText}
          />
          <Button
            label="÷"
            bgColor={COLORS.BUTTON_BG_LIGHT}
            setText={memorizedText}
          />
        </View>
        <View style={styles.colWrapper}>
          <Button
            label="7"
            bgColor={COLORS.BUTTON_BG}
            setText={memorizedText}
          />
          <Button
            label="8"
            bgColor={COLORS.BUTTON_BG}
            setText={memorizedText}
          />
          <Button
            label="9"
            bgColor={COLORS.BUTTON_BG}
            setText={memorizedText}
          />
          <Button
            label="X"
            bgColor={COLORS.BUTTON_BG_LIGHT}
            setText={memorizedText}
          />
        </View>
        <View style={styles.colWrapper}>
          <Button
            label="4"
            bgColor={COLORS.BUTTON_BG}
            setText={memorizedText}
          />
          <Button
            label="5"
            bgColor={COLORS.BUTTON_BG}
            setText={memorizedText}
          />
          <Button
            label="6"
            bgColor={COLORS.BUTTON_BG}
            setText={memorizedText}
          />
          <Button
            label="-"
            bgColor={COLORS.BUTTON_BG_LIGHT}
            setText={memorizedText}
          />
        </View>
        <View style={styles.colWrapper}>
          <Button
            label="1"
            bgColor={COLORS.BUTTON_BG}
            setText={memorizedText}
          />
          <Button
            label="2"
            bgColor={COLORS.BUTTON_BG}
            setText={memorizedText}
          />
          <Button
            label="3"
            bgColor={COLORS.BUTTON_BG}
            setText={memorizedText}
          />
          <Button
            label="+"
            bgColor={COLORS.BUTTON_BG_LIGHT}
            setText={memorizedText}
          />
        </View>
        <View style={styles.colWrapper}>
          <Button
            label="."
            bgColor={COLORS.BUTTON_BG}
            setText={memorizedText}
          />
          <Button
            label="0"
            bgColor={COLORS.BUTTON_BG}
            setText={memorizedText}
          />
          <Button
            label="+/-"
            bgColor={COLORS.BUTTON_BG}
            setText={memorizedText}
          />
          <Button
            label="="
            bgColor={COLORS.BUTTON_BG_BLUE}
            setText={memorizedText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
  },
  resultWrapper: {
    flex: 2,
    borderWidth: 1,
    borderColor: "#fff",
  },
  input: {
    flex: 4,
    borderWidth: 1,
    borderColor: "#fbfbfb",
    color: COLORS.TEXT_COLOR,
    fontSize: 30,
    textAlignVertical: "bottom",
    textAlign: "right",
    paddingBottom: 30,
    paddingRight: 10,
  },
  result: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#fbfbfb",
    textAlign: "right",
    color: COLORS.TEXT_COLOR,
    fontSize: 30,
    textAlignVertical: "center",
    paddingHorizontal: 20,
  },

  rowWrapper: {
    flexDirection: "column",
    gap: 15,
    marginBottom: 30,
  },
  colWrapper: {
    flexDirection: "row",
    gap: 10,
  },
});

export default index;
