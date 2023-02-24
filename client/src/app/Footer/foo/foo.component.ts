import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import axios from 'axios';
type Persona = Array<{
  name: string;
  img: string;
  estudios: Array<{
    institucion: string;
    profesion: string;
    termino: string;
    img: string;
  }>;
  fortalezas: Array<{ name: string; descripcion: string; img: string }>;
  lenguajes: Array<{ name: string; img: string }>;
  bio: string;
  proyectos: Array<{ name: string; url: string; img: string }>;
  contacto: Array<{
    linke: string;
    Git: string;
    numero: string;
    correo: string;
    calen: string;
  }>;
}>;
@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
})
export class FooComponent implements OnInit {
  personaje: Persona = [
    {
      name: 'Brayan Andres Ramirez Martinez',
      img: '../../../assets/WhatsApp_Image_2023-01-25_at_10.51.18_AM-removebg-preview.png',
      estudios: [
        {
          institucion: 'Universidad Uniciencia',
          profesion: 'Ing. sistemas',
          termino: 'En Proceso',
          img: '../../../assets/uniciencia.png',
        },
        {
          institucion: 'HENRY',
          profesion: 'Full Stack Web Developer',
          termino: 'Finalizado',
          img: '../../../assets/henry.png',
        },
      ],
      fortalezas: [
        {
          name: 'Flexible y Adaptable',
          descripcion:
            'Me adapto de forma rápida y eficiente a los cambios de escenario internos y externos.',
          img: '../../../assets/avion-unscreen.gif',
        },
        {
          name: 'Paciencia',
          descripcion:
            'Ante una situacion se toma el tiempo necesario para una buena resolucion',
          img: '../../../assets/reloj-unscreen.gif',
        },
        {
          name: 'Analisis',
          descripcion:
            'Ser capaz de entender los problemas y descomponerlos en problemas más pequeños y más fáciles de solucionar es muy útil en el oficio de la programación.',
          img: '../../../assets/grafico-de-linea-unscreen.gif',
        },
        {
          name: 'Realista y Consciente',
          descripcion: 'Ser consciente hasta donde llega mis capacidades',
          img: '../../../assets/redes-sociales-unscreen.gif',
        },
        {
          name: 'Trabajo en Equipo',
          descripcion:
            'Tengo la suficiente comunicacion para desarrollar actividad con grupos de trabajo',
          img: '../../../assets/cliente-unscreen.gif',
        },
      ],
      lenguajes: [
        {
          name: 'JavaScript',
          img: '../../../assets/archivo-js-removebg-preview.png',
        },
        { name: 'React', img: '../../../assets/atom-removebg-preview.png' },
        { name: 'Redux', img: '../../../assets/atom__1_-removebg-preview.png' },
        {
          name: 'Nextjs',
          img: '../../../assets/descarga-removebg-preview.png',
        },
        { name: 'Node', img: '../../../assets/node-js-removebg-preview.png' },
        {
          name: 'Express',
          img: '../../../assets/express-removebg-preview.png',
        },
        {
          name: 'PostgreSQL',
          img: '../../../assets/postgre-removebg-preview.png',
        },
        { name: 'Java', img: '../../../assets/java-removebg-preview.png' },
        { name: ' HTML', img: '../../../assets/html-removebg-preview.png' },
        {
          name: 'CSS',
          img: '../../../assets/css-file-format-removebg-preview.png',
        },
        { name: 'git', img: '../../../assets/github-removebg-preview.png' },
        {
          name: 'Mongoose',
          img: '../../../assets/cloud-database-removebg-preview.png',
        },
      ],
      bio: ' Es un gusto presentarme frente a ti, si!, si tu!, te agradezco por dedicarle tiempo en mirar mi perfil y darte de cuenta de quien soy y ya se no te e dicho nada, antes que anda me presento soy Brayan Andres Ramirez Martinez Programador full stack developer con conocimientos en ( | JavaScript | React |React Native| Redux |Redux Toolkit | Nextjs | Node | Express | PostgreSQL | Java | HTML | CSS | Git Hub| Mongoose), conocimientos en la  metodologia SCRUM',
      proyectos: [
        {
          name: 'Little Paws',
          url: 'https://proyecto-final-pf.vercel.app/home',
          img: '../../../assets/logo.jpeg',
        },
        {
          name: 'Food',
          url: 'https://github.com/brayanmar/comidasaludable',
          img: '../../../assets/salad.png',
        },
      ],
      contacto: [
        {
          linke:
            'https://www.linkedin.com/in/brayan-andres-ramirez-martinez-380891263',
          Git: 'https://github.com/brayanmar',
          numero: '+ 57 300-761-2392',
          correo: 'brianbrian216@gmail.com',
          calen:
            'https://calendly.com/brayanmar/entrevistas-programador-full-stack-developer',
        },
      ],
    },
  ];

  formulario!: FormGroup;
  async onSubmit  ()  {
   const a = await axios.post('/postUser',this.formulario.value).then(res => res).catch(err => err)
   this.formulario.reset();
    return (
      a.name === "AxiosError" ?  Swal.fire(a.response.data.info): Swal.fire(a.data.info))

  }

  constructor(private readonly fb: FormBuilder) {}
  ngOnInit(): void {
    this.formulario = this.iniform();
  }
  iniform(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      correo: ['', [Validators.required, Validators.email]],
      descripcion: ['', [Validators.required, Validators.minLength(15)]],
    });
  }
}
