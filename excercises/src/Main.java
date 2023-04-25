import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    // System.out.println("Hello world!");

    // poligono(5);

    String[] nombres = {"Lola", "Ramón", "Ulises"};
    String nombreMasLargo = elNombreMasLargo(nombres);
    System.out.println("El nombre mas largo de la lista: " + nombreMasLargo);
  }

  public static void poligono(int lados) {
    int diagonales = (lados * (lados - 3)) / 2;
    System.out.println("El numero de diagonales es: " + diagonales);
  }

  public static String elNombreMasLargo(String[] nombres) {
    String nombreMasLargo = nombres[0];

    for(int i = 1; i < nombres.length; i++) {
      if (nombreMasLargo.length() < nombres[i].length()) {
        for (int j = 0; j < nombres[i].length(); j++) {
           System.out.print(nombres[i].charAt(j));
        }
        nombreMasLargo = nombres[i];
      }
    }

    return nombreMasLargo;
  }
}