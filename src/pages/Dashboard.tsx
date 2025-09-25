import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Brain, 
  Plus, 
  Eye, 
  Bone, 
  Dumbbell, 
  Apple,
  Star,
  Phone,
  MessageCircle,
  Calendar,
  MapPin,
  Clock,
  Menu,
  Bell,
  User
} from "lucide-react";
import doctorAvatar from "@/assets/doctor-avatar.jpg";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  avatar: string;
  available: boolean;
  location?: string;
}

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: "psychology", name: "Psychology", icon: Brain, color: "bg-purple-light" },
    { id: "dentist", name: "Dentist", icon: Plus, color: "bg-info" },
    { id: "eye", name: "Eye", icon: Eye, color: "bg-warning" },
    { id: "bone", name: "Bone", icon: Bone, color: "bg-success" },
    { id: "workout", name: "WorkOut", icon: Dumbbell, color: "bg-destructive" },
    { id: "foods", name: "Foods", icon: Apple, color: "bg-purple-medium" },
  ];

  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Nur Rafi",
      specialty: "Cardio",
      rating: 4.5,
      reviews: 154,
      avatar: doctorAvatar,
      available: true,
      location: "Miami Hospital Center"
    },
    {
      id: 2,
      name: "Dr. Anika",
      specialty: "Knee, Joint, Orthopedic",
      rating: 4.5,
      reviews: 98,
      avatar: doctorAvatar,
      available: true,
    },
    {
      id: 3,
      name: "Dr. Rafiul",
      specialty: "Knee, Joint, Orthopedic",
      rating: 4.5,
      reviews: 142,
      avatar: doctorAvatar,
      available: false,
    },
    {
      id: 4,
      name: "Dr. Brian Hanner",
      specialty: "Cardio Specialist",
      rating: 4.0,
      reviews: 203,
      avatar: doctorAvatar,
      available: true,
    },
  ];

  const availableDoctors = doctors.filter(doc => doc.available);

  return (
    <div className="min-h-screen bg-gradient-light">
      {/* Header */}
      <header className="bg-card shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-bold text-primary ml-2">HealthConsult</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <Card className="bg-gradient-card shadow-medium">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">
                What do you want to Consult?
              </h2>
              <div className="relative mb-6">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for specialists, conditions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Button variant="gradient" size="icon" className="absolute right-2 top-2">
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              {/* Categories */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant="medical"
                      size="medical"
                      className={`flex flex-col space-y-2 h-20 ${
                        selectedCategory === category.id ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => setSelectedCategory(
                        selectedCategory === category.id ? null : category.id
                      )}
                    >
                      <div className={`p-2 rounded-lg ${category.color} text-white`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-medium">{category.name}</span>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={doctor.avatar} alt={doctor.name} />
                    <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {doctor.available && (
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      Available
                    </Badge>
                  )}
                </div>
                
                <h3 className="font-semibold text-lg mb-1">{doctor.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{doctor.specialty}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(doctor.rating) 
                            ? 'text-warning fill-current' 
                            : 'text-muted-foreground'
                        }`} 
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium">{doctor.rating}</span>
                    <span className="ml-1 text-sm text-muted-foreground">({doctor.reviews} reviews)</span>
                  </div>
                </div>

                {doctor.location && (
                  <div className="flex items-center mb-4 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {doctor.location}
                  </div>
                )}

                <div className="flex space-x-2">
                  <Button variant="call" size="sm" className="flex-1">
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Need Help Section */}
        <Card className="bg-gradient-card shadow-medium">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Need Help?</h3>
              <Badge className="bg-primary/10 text-primary">
                Specialist doctor available for talk 24 hours
              </Badge>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={doctorAvatar} alt="Robert Odell" />
                    <AvatarFallback>RO</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Robert Odell</h4>
                    <p className="text-sm text-muted-foreground">Available</p>
                  </div>
                </div>
                <Button variant="call" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-info/10 rounded-lg">
                    <User className="h-5 w-5 text-info" />
                  </div>
                  <div>
                    <p className="font-medium">Doctor</p>
                    <p className="text-sm text-muted-foreground">1K+ Available Doctor</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <p className="font-medium">Tests</p>
                    <p className="text-sm text-muted-foreground">20+ Test Available</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-warning/10 rounded-lg">
                    <Clock className="h-5 w-5 text-warning" />
                  </div>
                  <div>
                    <p className="font-medium">Availability</p>
                    <p className="text-sm text-muted-foreground">08:00 AM - 19:00 PM</p>
                  </div>
                </div>
              </div>

              <Button variant="appointment" className="w-full mt-4">
                Appoint Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;