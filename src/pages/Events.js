import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  Target,
  Mic,
  Laptop,
  BookOpen,
} from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Aura-Connect 2",
      date: "November 1, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Big Data Lab",
      type: "Weekly Bash",
      description:
        "Join us for a day of learning, collaboration, and fun with fellow developers in the Aura-7F community.",
      status: "upcoming",
      attendees: "30+",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Weekly Bash 18",
      date: "April 5, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Big Data Lab",
      type: "Weekly Bash",
      description:
        "Join us for a day of learning, collaboration, and fun with fellow developers in the Aura-7F community.",
      status: "completed",
      attendees: "20",
      feedback: "4.9/5",
    },
    {
      id: 5,
      title: "Aura-Connect 1",
      date: "August 23, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Big Data Lab",
      type: "Weekly Bash",
      description:
        "Join us for a day of learning, collaboration, and fun with fellow developers in the Aura-7F community.",
      status: "completed",
      attendees: "25+",
      feedback: "4.9/5",
    },
    {
      id: 6,
      title: "Project Showcase 2",
      date: "August 31, 2025",
      time: "4:00 PM - 7:00 PM",
      location: "Online Meeting",
      type: "Project Showcase",
      description:
        "BBB Members showcasing their latest projects and innovations to the community.",
      status: "completed",
      attendees: "25+",
      feedback: "4.7/5",
    },
  ];

  const EventCard = ({ event, isPast = false }) => (
    <div className={`event-card ${isPast ? "past-event" : "upcoming-event"}`}>
      <div className="event-header">
        <div className="event-type">{event.type}</div>
        <div className="event-status">{isPast ? "Completed" : "Upcoming"}</div>
      </div>
      <h3 className="event-title">{event.title}</h3>
      <div className="event-details">
        <div className="event-detail">
          <Calendar size={18} />
          <span>{event.date}</span>
        </div>
        <div className="event-detail">
          <Clock size={18} />
          <span>{event.time}</span>
        </div>
        <div className="event-detail">
          <MapPin size={18} />
          <span>{event.location}</span>
        </div>
        <div className="event-detail">
          <Users size={18} />
          <span>{event.attendees} attendees</span>
        </div>
        {isPast && event.feedback && (
          <div className="event-detail">
            <Star size={18} color="#FFD700" />
            <span>{event.feedback} rating</span>
          </div>
        )}
      </div>
      <p className="event-description">{event.description}</p>
      {!isPast && <button className="event-button">Register Now</button>}
    </div>
  );

  return (
    <>
      {/* Events Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-title">Events</h1>
            <p className="page-subtitle">
              Join our community events to expand your knowledge and network
            </p>
          </div>
        </div>
      </section>

      {/* Event Stats */}
      <section className="section">
        <div className="container">
          <div className="event-stats">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Events Hosted</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Total Attendees</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.8</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="events-grid upcoming-events">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section past-events-section">
        <div className="container">
          <h2 className="section-title">Past Events</h2>
          <div className="events-grid">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} isPast={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <div className="event-types-grid">
            <div className="event-type-card">
              <Target size={32} />
              <h3 className="type-title">Weekly Bash</h3>
              <p className="type-description">
                A day of learning, collaboration, and fun with fellow developers in the Aura-7F community.
              </p>
            </div>
            <div className="event-type-card">
              <Laptop size={32} />
              <h3 className="type-title">Project Showcase Hosting</h3>
              <p className="type-description">
                Hosting sessions where members present their projects to the
                community for feedback and recognition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
