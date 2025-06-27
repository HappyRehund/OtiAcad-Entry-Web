import React from "react";
import { Link } from "react-router-dom";
import {
  CheckSquare,
  DollarSign,
  Heart,
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";
import Container from "../components/Container";

const HomePage = () => {
  const tools = [
    {
      title: "To-Do List",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      icon: CheckSquare,
      path: "/todolist",
      color: "text-primary",
      bgColor: "bg-primary/10",
      available: true,
      features: ["Cihuyyy", "Cihuyyy", "Cihuyyy", "Cihuyyy"],
    },
    {
      title: "Expense Tracker",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      icon: DollarSign,
      path: "/expense-tracker",
      color: "text-success",
      bgColor: "bg-success/10",
      available: false,
      features: ["Cihuyy", "Cihuyy", "Cihuyy", "Cihuyy"],
    },
    {
      title: "Health Tracker",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      icon: Heart,
      path: "/health-tracker",
      color: "text-error",
      bgColor: "bg-error/10",
      available: false,
      features: ["Cihuyy", "Cihuyy", "Cihuyy", "Cihuyy"],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Container>
        <div className="hero min-h-[70vh] bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="hero-content text-center max-w-4xl">
            <div className="animate-slide-down">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Zap className="h-16 w-16 text-primary" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
                Tools App
              </h1>
              <p className="text-xl md:text-2xl text-base-content/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Manage your tasks here !!!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/todolist"
                  className="btn btn-primary btn-lg gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Target className="h-5 w-5" />
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="#features"
                  className="btn btn-outline btn-lg gap-2 hover:btn-primary transition-all duration-300"
                >
                  Explore Features
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Features Section */}
      <Container>
        <div id="features" className="py-20 bg-base-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
                Made by Rehund
              </h2>
              <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                Tools by Rehund
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.title}
                    className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in border border-base-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="card-body p-8">
                      <div
                        className={`w-16 h-16 ${tool.bgColor} rounded-2xl flex items-center justify-center mb-6`}
                      >
                        <Icon className={`h-8 w-8 ${tool.color}`} />
                      </div>

                      <p className="text-base-content/70 mb-6 leading-relaxed">
                        {tool.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-base-content mb-3">
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {tool.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-base-content/70"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="card-actions justify-end">
                        {tool.available ? (
                          <Link
                            to={tool.path}
                            className="btn btn-primary gap-2 hover:shadow-lg transition-all duration-300"
                          >
                            Launch Tool
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        ) : (
                          <button className="btn btn-disabled gap-2">
                            Coming Soon
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* Stats Section
      <Container>
        <div className="py-20 bg-base-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
                Built for Productivity
              </h2>
              <p className="text-lg text-base-content/70">
                Designed with modern web technologies for the best user
                experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="stat bg-base-100 rounded-2xl shadow-lg">
                <div className="stat-figure text-primary">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <div className="stat-title">Performance</div>
                <div className="stat-value text-primary">Fast</div>
                <div className="stat-desc">Lightning-fast React app</div>
              </div>

              <div className="stat bg-base-100 rounded-2xl shadow-lg">
                <div className="stat-figure text-secondary">
                  <CheckSquare className="h-8 w-8" />
                </div>
                <div className="stat-title">Features</div>
                <div className="stat-value text-secondary">Rich</div>
                <div className="stat-desc">Comprehensive tool suite</div>
              </div>

              <div className="stat bg-base-100 rounded-2xl shadow-lg">
                <div className="stat-figure text-accent">
                  <Heart className="h-8 w-8" />
                </div>
                <div className="stat-title">Design</div>
                <div className="stat-value text-accent">Beautiful</div>
                <div className="stat-desc">Modern & intuitive UI</div>
              </div>
            </div>
          </div>
        </div>
      </Container> */}

      {/* CTA Section */}
      <Container>
        <div className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Lets Use This Tool
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Start with try the to-do list
              </p>
              <Link
                to="/todolist"
                className="btn btn-lg bg-white text-primary hover:bg-base-100 border-none shadow-xl hover:shadow-2xl transition-all duration-300 gap-2"
              >
                <CheckSquare className="h-6 w-6" />
                Start TodoList Here
                <ArrowRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
