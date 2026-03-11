import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Play, BookOpen, CheckCircle2, Lock, ChevronRight, Clock } from 'lucide-react';

const Academy = () => {
  const courses = [
    {
      title: "Forex Fundamentals",
      level: "Beginner",
      duration: "4h 20m",
      lessons: 12,
      completed: 100,
      status: "Completed",
      image: "https://picsum.photos/seed/chart1/800/400"
    },
    {
      title: "Technical Analysis Mastery",
      level: "Intermediate",
      duration: "8h 45m",
      lessons: 24,
      completed: 45,
      status: "In Progress",
      image: "https://picsum.photos/seed/chart2/800/400"
    },
    {
      title: "Institutional Order Flow",
      level: "Advanced",
      duration: "12h 15m",
      lessons: 30,
      completed: 0,
      status: "Locked",
      image: "https://picsum.photos/seed/chart3/800/400"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase italic mb-2">Trading <span className="text-emerald-500">Academy</span></h1>
          <p className="text-white/30 font-bold uppercase tracking-widest text-xs">Master the markets with our structured learning roadmap.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Overall Progress</p>
            <div className="flex items-center gap-3">
              <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[35%] h-full bg-emerald-500" />
              </div>
              <span className="text-sm font-black italic">35%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] overflow-hidden group hover:border-white/10 transition-all"
          >
            <div className="relative h-48 overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  course.level === 'Beginner' ? 'bg-emerald-500 text-black' : 
                  course.level === 'Intermediate' ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white'
                }`}>
                  {course.level}
                </span>
              </div>
              {course.status !== 'Locked' && (
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                  <Play className="w-5 h-5 fill-current ml-1" />
                </button>
              )}
            </div>

            <div className="p-8">
              <h3 className="text-xl font-black uppercase italic tracking-tight mb-4">{course.title}</h3>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-white/20" />
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{course.lessons} Lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white/20" />
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{course.duration}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                  <span className="text-white/20">Progress</span>
                  <span className={course.completed === 100 ? 'text-emerald-500' : 'text-white'}>{course.completed}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${course.completed}%` }}
                    className={`h-full ${course.completed === 100 ? 'bg-emerald-500' : 'bg-white/20'}`} 
                  />
                </div>
              </div>

              <button className={`w-full mt-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                course.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                course.status === 'Locked' ? 'bg-white/5 text-white/20 cursor-not-allowed' :
                'bg-white text-black hover:bg-emerald-500'
              }`}>
                {course.status === 'Completed' ? (
                  <><CheckCircle2 className="w-4 h-4" /> Review Course</>
                ) : course.status === 'Locked' ? (
                  <><Lock className="w-4 h-4" /> Locked</>
                ) : (
                  <>Continue Learning <ChevronRight className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Academy;
