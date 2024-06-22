import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import {
  TextInput,
  Checkbox,
  RadioButton,
  Text,
  Divider,
} from "react-native-paper";
import React from "react";
import { Formik } from "formik";

export default function Churchform() {
  return (
    <SafeAreaView>
      <View style={styles.formContainer}>
        <Text
          style={{
            textAlign: "center",
            color: "#000000",
            fontSize: 20,
            fontWeight: "bold",
            paddingBottom: 20,
          }}
        >
          LET US KNOW YOU MORE
        </Text>
        <Formik
          initialValues={{
            name: "",
            phoneNumber: "",
            email: "",
            address: "",
            membership: "",
            prayerRequest: "",
            daysAttending: [],
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <ScrollView>
              <TextInput
                label="Name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                error={touched.name && errors.name}
                style={styles.input}
              />
              {touched.name && errors.name && (
                <Text style={styles.error}>{errors.name}</Text>
              )}

              <TextInput
                label="Phone Number"
                keyboardType="phone-pad"
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
                error={touched.phoneNumber && errors.phoneNumber}
                style={styles.input}
              />
              {touched.phoneNumber && errors.phoneNumber && (
                <Text style={styles.error}>{errors.phoneNumber}</Text>
              )}

              <TextInput
                label="Email"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                error={touched.email && errors.email}
                style={styles.input}
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

              <TextInput
                label="Residential Address"
                onChangeText={handleChange("address")}
                onBlur={handleBlur("address")}
                value={values.address}
                error={touched.address && errors.address}
                style={styles.input}
              />
              {touched.address && errors.address && (
                <Text style={styles.error}>{errors.address}</Text>
              )}

              <Text style={styles.label}>Membership Status</Text>
              <RadioButton.Group
                onValueChange={handleChange("membership")}
                value={values.membership}
              >
                <RadioButton.Item label="Member" value="member" />
                <RadioButton.Item label="Visitor" value="visitor" />
              </RadioButton.Group>
              {touched.membership && errors.membership && (
                <Text style={styles.error}>{errors.membership}</Text>
              )}

              <TextInput
                label="Prayer Request"
                multiline
                numberOfLines={4}
                onChangeText={handleChange("prayerRequest")}
                onBlur={handleBlur("prayerRequest")}
                value={values.prayerRequest}
                style={styles.input}
              />

              <Text style={styles.label}>Days Attending</Text>
              <View>
                <Checkbox.Item
                  label="Thursday"
                  status={
                    values.daysAttending.includes("Thursday")
                      ? "checked"
                      : "unchecked"
                  }
                  onPress={() => {
                    if (values.daysAttending.includes("Thursday")) {
                      setFieldValue(
                        "daysAttending",
                        values.daysAttending.filter((day) => day !== "Thursday")
                      );
                    } else {
                      setFieldValue("daysAttending", [
                        ...values.daysAttending,
                        "Thursday",
                      ]);
                    }
                  }}
                />
                <Checkbox.Item
                  label="Friday"
                  status={
                    values.daysAttending.includes("Friday")
                      ? "checked"
                      : "unchecked"
                  }
                  onPress={() => {
                    if (values.daysAttending.includes("Friday")) {
                      setFieldValue(
                        "daysAttending",
                        values.daysAttending.filter((day) => day !== "Friday")
                      );
                    } else {
                      setFieldValue("daysAttending", [
                        ...values.daysAttending,
                        "Friday",
                      ]);
                    }
                  }}
                />
                <Checkbox.Item
                  label="Saturday"
                  status={
                    values.daysAttending.includes("Saturday")
                      ? "checked"
                      : "unchecked"
                  }
                  onPress={() => {
                    if (values.daysAttending.includes("Saturday")) {
                      setFieldValue(
                        "daysAttending",
                        values.daysAttending.filter((day) => day !== "Saturday")
                      );
                    } else {
                      setFieldValue("daysAttending", [
                        ...values.daysAttending,
                        "Saturday",
                      ]);
                    }
                  }}
                />
              </View>
              {touched.daysAttending && errors.daysAttending && (
                <Text style={styles.error}>{errors.daysAttending}</Text>
              )}

              <Divider style={styles.divider} />
              <View
                style={{
                  width: "80%",
                  marginHorizontal: 40,
                  marginVertical: 15,
                }}
              >
                <Button title="Submit" onPress={handleSubmit} color="#272829" />
              </View>
            </ScrollView>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  formContainer: {
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    height: "100%",
    marginTop: 50,
    marginHorizontal: 10,
  },
});
