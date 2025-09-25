import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Heart, Users, Calendar, Shield, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-light">
      {/* Header */}
      <header className="bg-card shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-primary">HealthConsult</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button variant="gradient">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="mx-auto w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-strong mb-8">
              <Stethoscope className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Health, Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Priority
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Connect with qualified doctors instantly. Get expert medical consultations, 
              book appointments, and manage your health journey all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="appointment" size="lg" className="px-8">
                  Start Your Consultation
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="px-8">
                  Sign In to Continue
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose HealthConsult?</h2>
            <p className="text-muted-foreground">Experience healthcare reimagined</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-light/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-medium" />
                </div>
                <CardTitle>Expert Doctors</CardTitle>
                <CardDescription>
                  Connect with certified specialists across all medical fields
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-success" />
                </div>
                <CardTitle>24/7 Availability</CardTitle>
                <CardDescription>
                  Book appointments anytime, get consultations when you need them
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-200">
              <CardHeader>
                <div className="w-12 h-12 bg-info/10 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-info" />
                </div>
                <CardTitle>Secure & Private</CardTitle>
                <CardDescription>
                  Your health data is protected with enterprise-grade security
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-primary shadow-strong">
            <CardContent className="p-12">
              <Heart className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Take Control of Your Health?
              </h2>
              <p className="text-purple-light mb-8 text-lg">
                Join thousands of patients who trust HealthConsult for their medical needs
              </p>
              <Link to="/register">
                <Button variant="secondary" size="lg" className="px-8 bg-white text-primary hover:bg-white/90">
                  Get Started Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-primary">HealthConsult</span>
            </div>
            <p className="text-muted-foreground">
              © 2024 HealthConsult. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
