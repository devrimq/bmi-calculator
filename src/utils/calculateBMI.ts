export function calculateBMI(weight: number, height: number): { bmi: number; category: string } {
    const bmi = weight / ((height / 100) * (height / 100));
    let category = "";
  
    if (bmi < 18.5) category = "Zayıf";
    else if (bmi < 25) category = "Sağlıklı";
    else if (bmi < 30) category = "Kilolu";
    else if (bmi < 40) category = "Şişman";
    else category = "Aşırı Şişman";
  
    return { bmi: parseFloat(bmi.toFixed(2)), category };
  }
  