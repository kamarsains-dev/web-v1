import "dotenv/config";
import { createClient } from "@/lib/supabase/client";

const seed = async () => {
    const supabase = await createClient();

    console.log("Seeding data...")

    await supabase.from("courses").delete().neq("id", "");
    await supabase.from("user_progress").delete().neq("id", "");

    const { data, error } = await supabase.from("courses").insert([
      {
        id: 1,
        title: "Penalaran Matematika",
        icon: "/venn.svg",
        slug: "penalaran-matematika",
        badge: "New",
      },
      {
        id: 2,
        title: "Penalaran Kuantitatif",
        icon: "/triangle.svg",
        slug: "penalaran-kuantitatif",
        badge: "New",
      },
    ]);
    
    if (error) {
        console.error("Error seeding data:", error);
    } else {
        console.log("Data seeded successfully:", data);
    }
}

seed();