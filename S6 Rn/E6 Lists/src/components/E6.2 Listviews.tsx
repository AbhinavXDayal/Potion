import { SectionList, StyleSheet, Text, View } from "react-native";

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 22,
  },
  SectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  Item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const SectionView = () => {
  return (
    <View style={Styles.Container}>
      <SectionList
        sections={[
          { title: "D", data: ["Devin", "Dan", "Dominic"] },
          {
            title: "J",
            data: [
              "Jackson",
              "James",
              "Julie",
            ],
          },
        ]}
        renderItem={({ item }) => <Text style={Styles.Item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={Styles.SectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item}`}
      />
    </View>
  );
};

export default SectionView;