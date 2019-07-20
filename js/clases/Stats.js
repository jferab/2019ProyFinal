function Stats()
{
  this.Ataque = function(bTieneArma, ataqueBase, valorArma)                     //Funcion calcular ataque actual
  {
    if(bTieneArma)
    {
      this.ataque = ataqueBase * valorArma;
      return this.ataque;
    }
    else
    {
      this.ataque = ataqueBase;
      return this.ataque;
    }
  }

  this.Defensa = function(bTieneEscudo, defensaBase, valorEscudo)               //Funcion calcular defensa actual
  {
    if(bTieneEscudo)
    {
      this.defensa = defensaBase * valorEscudo;
      return this.defensa;
    }
    else
    {
      this.defensa = defensaBase;
      return this.defensa;
    }
  }

  this.Daño = function(ataque, defensa)                                         //Funcion calcular daño
  {
    this.diferencia = ataque - defensa;

    if(this.diferencia <= 0)
    {
      return 0;
    }
    else if (this.diferencia > 0)
    {
      return this.diferencia;
    }
  }
  console.log("Ataque:", Ataque(true, 5, 2), "Defensa:", Defensa(true, 2, 2));
  console.log("Daño:", Daño(Ataque(true, 5, 2), Defensa(true, 2, 2)));
}
Stats();
