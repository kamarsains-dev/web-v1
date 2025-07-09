'use client'

import CourseCard from "@/components/ui/course-card";

type course = {
    id: number;
    title: string;
    slug: string;
    badge: string;
    icon: string;
}

type Props = {
    courses: course[];
    activeCourseId: number;

}

const List = ({ courses, activeCourseId }: Props) => {
    
    return (
        <div className="mt-4 lg:mt-0">
            <div className=" grid lg:flex gap-4 justify-center items-center w-full h-full">
                {courses.map((course) => {
                    const isActive = course.id === activeCourseId
                    return (
                        <CourseCard 
                            key={course.id}
                            id={course.id}
                            title= {course.title}
                            slug={`/courses/${course.slug}`}
                            badge={course.badge}
                            icon={course.icon}
                            isActive={isActive}
                            />    
                    ) 
                })}    
            </div>
            
        </div>
    )
}

export default List;