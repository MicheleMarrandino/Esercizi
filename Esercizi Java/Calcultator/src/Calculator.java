import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        System.out.println("Inserisci il primo numero:");
        Scanner a = new Scanner(System.in);
        float x = a.nextFloat();

        System.out.println("Inserisci il Secondo numero:");
        Scanner b = new Scanner(System.in);
        float y = b.nextFloat();

        System.out.println("Inserisci l'operazione (+,-,/,*) da effettuare:");
        Scanner c = new Scanner(System.in);
        char z = c.next().charAt(0);

        switch (z) {
            case '-' -> System.out.println(sub(x, y));
            case '+' -> System.out.println(add(x, y));
            case '*' -> System.out.println(mul(x, y));
            case '/' -> System.out.println(div(x, y));
            default -> System.out.println("Qualcosa e' andato storto.");
        }

    }

    public static double add(double x, double y){
        return (x+y);
    }

    private static float div(float x, float y){
        return (x/y);
    }

    private static float sub(float x, float y){
        return (x-y);
    }

    private static float mul(float x, float y){
        return (x*y);
    }

}
