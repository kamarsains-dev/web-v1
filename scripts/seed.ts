import "dotenv/config";
import { createClient } from "@/lib/supabase/client";

const seed = async () => {
    const supabase = await createClient();

    console.log("Seeding data...")

    await supabase.from("courses").delete().neq("id", "");
    await supabase.from("user_progress").delete().neq("id", "");
    await supabase.from("units").delete().neq("id", "");
    await supabase.from("lessons").delete().neq("id", "");
    await supabase.from("challenges").delete().neq("id", "");
    await supabase.from("challenge_options").delete().neq("id", "");
    await supabase.from("challenge_progress").delete().neq("id", "");

    const { data, error } = await supabase.from("courses").upsert([
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

    const { error: unitError } = await supabase.from("units").upsert([
      {
        id: 1,
        course_id: 1,
        title: "Unit 1",
        description: "Belajar penalaran matematika",
        order: 1,
      },
    ]);

    if (unitError) {
      console.log("Error seeding units", unitError)
    }

    const { error: lessonsError } = await supabase.from("lessons").upsert([
      {
        id: 1,
        unit_id: 1,
        order: 1,
        title: "Penjumlahan",
        slug: "penjumlahan"
      },
      {
        id: 2,
        unit_id: 1,
        order: 2,
        title: "Pengurangan",
        slug: "pengurangan"
      },
      {
        id: 3,
        unit_id: 1,
        order: 3,
        title: "Pembagian",
        slug: "pembagian"
      },
      {
        id: 4,
        unit_id: 1,
        order: 4,
        title: "Perkalian",
        slug: "perkalian"
      },
      {
        id: 5,
        unit_id: 1,
        order: 5,
        title: "Aritmatika",
        slug: "aritmatika"
      },
      {
        id: 6,
        unit_id: 1,
        order: 6,
        title: "Aljabar",
        slug: "aljabar"
      },
      {
        id: 8,
        unit_id: 1,
        order: 7,
        title: "Geometri",
        slug: "geometri"
      },
      {
        id: 9,
        unit_id: 1,
        order: 9,
        title: "Statistika",
        slug: "statistika"
      },
      {
        id: 10,
        unit_id: 1,
        order: 10,
        title: "kalkulus",
        slug: "kalkulus"
      },
    ]);

    if (lessonsError) {
      console.log("Error seeding lessons", lessonsError);
    }

    const { error: challengesError } = await supabase.from("challenges").upsert([
      {
        id: 1,
        lesson_id: 1,
        type: "SELECT",
        order: 1,
        question: "Tentukan hasil dari 2 + 3",
      },
      {
        id: 2,
        lesson_id: 1,
        type: "ASSIST",
        order: 2,
        question: "Tentukan hasil dari 10 - 3",
      },
    ]);

    if (challengesError) {
      console.log("Error seeding challenges", challengesError);
    }

    const { error: challengeOptionsError } = await supabase
      .from("challenge_options")
      .upsert([
        {
          id: 1,
          challenge_id: 1,
          correct: true,
          text: "5",
        },
        {
          id: 2,
          challenge_id: 1,
          correct: false,
          text: "7",
        },
        {
          id: 3,
          challenge_id: 1,
          correct: false,
          text: "2",
        },
        {
          id: 4,
          challenge_id: 1,
          correct: false,
          text: "3",
        },
        {
          id: 5,
          challenge_id: 1,
          correct: false,
          text: "6",
        },
      ]);

    if (challengeOptionsError) {
      console.log("Error seeding challenges", challengeOptionsError);
    }
}

seed();