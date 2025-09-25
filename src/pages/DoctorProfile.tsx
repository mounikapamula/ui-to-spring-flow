import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft,
  Star,
  Phone,
  MessageCircle,
  Calendar,
  MapPin,
  Clock,
  Heart,
  Award,
  Users
} from "lucide-react";
import doctorAvatar from "@/assets/doctor-avatar.jpg";

const DoctorProfile = () => {
  const navigate = useNavigate();
  const [isLive, setIsLive] = useState(true);

  const doctor = {
    name: "Dr. Nur Rafi",
    specialty: "Cardio",
    rating: 4.5,
    reviews: 154,
    avatar: doctorAvatar,
    location: "Miami Hospital Center",
    availability: "08:00 AM - 19:00 PM",
    experience: "15+ years",
    description: "Specialist in bone and skin health. Love sharing and work at Miami Hospital with great experience in heart surgery and cardiovascular diseases.",
    education: ["Harvard Medical School", "Johns Hopkins Residency"],
    certifications: ["Board Certified Cardiologist", "Advanced Cardiac Life Support"],
  };

  return (
    <div className="min-h-screen bg-gradient-light">
      {/* Header */}
      <header className="bg-card shadow-soft border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-lg font-semibold ml-4">Doctor Profile</h1>
            </div>
            {isLive && (
              <Badge className="bg-success/10 text-success">
                <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
                Live
              </Badge>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Doctor Header */}
        <Card className="bg-gradient-card shadow-medium mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <Avatar className="h-32 w-32">
                <AvatarImage src={doctor.avatar} alt={doctor.name} />
                <AvatarFallback className="text-2xl">
                  {doctor.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
                <p className="text-lg text-muted-foreground mb-4">{doctor.specialty}</p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${
                          i < Math.floor(doctor.rating) 
                            ? 'text-warning fill-current' 
                            : 'text-muted-foreground'
                        }`} 
                      />
                    ))}
                    <span className="ml-2 font-medium">{doctor.rating}</span>
                    <span className="ml-1 text-muted-foreground">({doctor.reviews} reviews)</span>
                  </div>
                  
                  <Badge variant="secondary" className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {doctor.experience}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {doctor.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {doctor.availability}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="call" className="flex-1">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat
                  </Button>
                  <Button variant="appointment" className="flex-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="space-y-6">
            <Card className="bg-gradient-card shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">About Dr. {doctor.name.split(' ')[1]}</h3>
                <p className="text-muted-foreground mb-6">{doctor.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      Education
                    </h4>
                    <ul className="space-y-2">
                      {doctor.education.map((edu, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          • {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-primary" />
                      Certifications
                    </h4>
                    <ul className="space-y-2">
                      {doctor.certifications.map((cert, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          • {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="space-y-4">
            {[1, 2, 3].map((review) => (
              <Card key={review} className="bg-gradient-card shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">John Doe</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-warning fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">2 days ago</p>
                      <p className="text-sm">
                        Excellent doctor! Very thorough examination and clear explanation 
                        of the treatment plan. Highly recommended.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="availability">
            <Card className="bg-gradient-card shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Schedule an Appointment</h3>
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                    <div key={day} className="text-center">
                      <div className="text-sm font-medium mb-2">{day}</div>
                      <Button 
                        variant={index === 3 ? "default" : "outline"} 
                        size="sm" 
                        className="w-full h-12"
                      >
                        {15 + index}
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Available Time Slots</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM'].map((time) => (
                      <Button key={time} variant="outline" size="sm">
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <Button variant="appointment" className="w-full mt-6">
                  Confirm Appointment
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DoctorProfile;