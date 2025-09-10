import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}> JobMatchPro</Text>
          <Text style={styles.subtitle}>AI-Powered Job Matching Platform</Text>
        </View>
        
        <View style={styles.featuresContainer}>
          <Text style={styles.sectionTitle}> Key Features</Text>
          
          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}></Text>
            <Text style={styles.featureTitle}>AI Job Matching</Text>
            <Text style={styles.featureDescription}>95% accuracy algorithm matches you with perfect jobs</Text>
          </View>
          
          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}></Text>
            <Text style={styles.featureTitle}>Premium Subscriptions</Text>
            <Text style={styles.featureDescription}>$29.99-$99.99/month for advanced features</Text>
          </View>
          
          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}></Text>
            <Text style={styles.featureTitle}>Mobile First</Text>
            <Text style={styles.featureDescription}>Optimized for mobile job searching</Text>
          </View>
          
          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}></Text>
            <Text style={styles.featureTitle}>Infinite Perfection</Text>
            <Text style={styles.featureDescription}>Zero crashes, advanced error handling</Text>
          </View>
        </View>
        
        <View style={styles.revenueContainer}>
          <Text style={styles.sectionTitle}> Revenue Projections</Text>
          <View style={styles.revenueCard}>
            <Text style={styles.revenueAmount}>$5,000+</Text>
            <Text style={styles.revenuePeriod}>Monthly Recurring Revenue</Text>
          </View>
          <View style={styles.revenueCard}>
            <Text style={styles.revenueAmount}>$500,000+</Text>
            <Text style={styles.revenuePeriod}>Annual Revenue Target</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaText}> Ready for Play Store!</Text>
        </TouchableOpacity>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>Built with Infinite Perfection</Text>
          <Text style={styles.footerText}>Ready for Maximum Profit</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#7f8c8d",
    textAlign: "center",
  },
  featuresContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
    textAlign: "center",
  },
  featureCard: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featureIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: "#7f8c8d",
    lineHeight: 20,
  },
  revenueContainer: {
    marginBottom: 30,
  },
  revenueCard: {
    backgroundColor: "#e8f5e8",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#27ae60",
  },
  revenueAmount: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#27ae60",
    marginBottom: 5,
  },
  revenuePeriod: {
    fontSize: 14,
    color: "#2c3e50",
    fontWeight: "600",
  },
  ctaButton: {
    backgroundColor: "#3498db",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  ctaText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    alignItems: "center",
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#ecf0f1",
  },
  footerText: {
    fontSize: 14,
    color: "#7f8c8d",
    marginBottom: 5,
  },
});
