const chapters = [
  { num: 1, arc: "Examen Hunter", title: "Un chico que salió de la jungla", desc: "Gon Freecss, un niño de Isla Ballena, descubre que su padre Ging es un legendario cazador." },
  { num: 2, arc: "Examen Hunter", title: "Encuentro con el cazador", desc: "Gon comienza su viaje y conoce a Leorio y Kurapika durante el trayecto al examen." },
  { num: 3, arc: "Examen Hunter", title: "Orgullo de fracasado", desc: "Comienza la primera fase del examen de cazador, una maratón agotadora liderada por Satotz." },
  { num: 4, arc: "Examen Hunter", title: "Decisión de un marino", desc: "Los aspirantes cruzan un pantano letal mientras son perseguidos por criaturas peligrosas." },
  { num: 5, arc: "Examen Hunter", title: "Hisoka, el mago", desc: "Aparece el misterioso y siniestro mago Hisoka, despertando el miedo entre los participantes." },
  { num: 6, arc: "Examen Hunter", title: "Propuesta de un desconocido", desc: "Hisoka entrega a Gon un número de jugador, marcándolo como su futuro oponente." },
  { num: 7, arc: "Examen Hunter", title: "Batalla en el tren", desc: "Los examinados deben sobrevivir en un tren en marcha mientras enfrentan nuevas trampas." },
  { num: 8, arc: "Examen Hunter", title: "El camino a Isla Ballena", desc: "Gon recuerda su infancia en Isla Ballena y la promesa que hizo con su tía Mito." },
  { num: 9, arc: "Examen Hunter", title: "Torneo de cacería", desc: "Comienza la segunda fase del examen con una cacería en un bosque encantado." },
  { num: 10, arc: "Examen Hunter", title: "Habilidad oculta", desc: "Gon demuestra un talento innato que sorprende incluso a los examinadores más veteranos." },
  { num: 11, arc: "Examen Hunter", title: "Juego de engaño", desc: "Los participantes enfrentan una prueba de ingenio donde deberán usar la mentira para avanzar." },
  { num: 12, arc: "Examen Hunter", title: "El destino se revela", desc: "Se revela el oscuro pasado de Kurapika y su conexión con la Brigada Fantasma." },
  { num: 13, arc: "Examen Hunter", title: "Pelea con Hisoka", desc: "Gon se enfrenta a Hisoka en un combate que pone a prueba su valentía y determinación." },
  { num: 14, arc: "Examen Hunter", title: "Carta de la rosa", desc: "La prueba final del examen comienza con un duelo de supervivencia en una isla desierta." },
  { num: 15, arc: "Examen Hunter", title: "Olor a trampa", desc: "Gon y Killua fortalecen su amistad mientras enfrentan juntos los peligros de la isla." },
  { num: 16, arc: "Examen Hunter", title: "Rebelión del perdedor", desc: "Un participante se rebela contra las reglas del examen, creando el caos entre los grupos." },
  { num: 17, arc: "Examen Hunter", title: "Abismo de muerte", desc: "Los examinados se enfrentan a una prueba letal al borde de un acantilado infinito." },
  { num: 18, arc: "Examen Hunter", title: "Prueba final", desc: "Llega la última fase del examen: combates uno contra uno que definirán a los nuevos cazadores." },
  { num: 19, arc: "Examen Hunter", title: "Cazador es cazador", desc: "Gon obtiene su licencia de cazador y se despide temporalmente de sus amigos." },
  { num: 20, arc: "Familia Zoldyck", title: "Marea del destino", desc: "Gon viaja a la mansión Zoldyck para rescatar a Killua de su familia de asesinos." },
  { num: 21, arc: "Familia Zoldyck", title: "Secreto del sexto ojo", desc: "Los chicos enfrentan a los sirvientes de la mansión Zoldyck para llegar hasta Killua." },
  { num: 22, arc: "Familia Zoldyck", title: "Despertar de la bestia", desc: "Killua se enfrenta a su hermano Illumi para demostrar su libre albedrío." },
  { num: 23, arc: "Familia Zoldyck", title: "Batalla decisiva", desc: "Gon y Killua se reencuentran y deciden continuar su viaje juntos como cazadores." },
  { num: 24, arc: "Torre Celestial", title: "Llegada al cielo", desc: "Gon y Killua llegan a la Torre Celestial, un enorme edificio lleno de combatientes." },
  { num: 25, arc: "Torre Celestial", title: "Adiestramiento del cazador", desc: "Los chicos aprenden los fundamentos del Nen con la ayuda de un nuevo maestro." },
  { num: 26, arc: "Torre Celestial", title: "Poder del Nen", desc: "Gon descubre su tipo de Nen y comienza a desarrollar sus habilidades únicas de combate." },
  { num: 27, arc: "Torre Celestial", title: "Jefe de la planta", desc: "Killua enfrenta a un poderoso luchador en los pisos superiores de la Torre Celestial." },
  { num: 28, arc: "Torre Celestial", title: "Killua contra el grupo", desc: "Killua demuestra su talento brutal en combate contra múltiples oponentes a la vez." },
  { num: 29, arc: "Torre Celestial", title: "Decisión de Killua", desc: "Killua reflexiona sobre su futuro como cazador y toma una decisión importante." },
  { num: 30, arc: "Torre Celestial", title: "Estrella del espectáculo", desc: "Los combates en la Torre Celestial alcanzan su punto culminante con sorpresas impactantes." },
  { num: 31, arc: "Torre Celestial", title: "Chico llamado Zushi", desc: "Gon y Killua conocen a Zushi, un joven aprendiz que también domina las artes del Nen." },
  { num: 32, arc: "Torre Celestial", title: "Prueba verdadera", desc: "Los chicos se preparan para la prueba definitiva de la Torre Celestial contra un rival formidable." },
  { num: 33, arc: "Yorknew City", title: "Ciudad de Yorknew", desc: "El grupo llega a la bulliciosa Yorknew City, donde se celebra la subasta anual más grande del mundo." },
  { num: 34, arc: "Yorknew City", title: "Subasta subterránea", desc: "Comienza la subasta de objetos valiosos mientras fuerzas oscuras se mueven en las sombras." },
  { num: 35, arc: "Yorknew City", title: "Brigada Fantasma", desc: "Kurapika se infiltra en la temida Brigada Fantasma para vengar la masacre de su clan." },
  { num: 36, arc: "Yorknew City", title: "Pasado de Kurapika", desc: "La trágica historia del clan Kurta es revelada: la masacre perpetrada por la Brigada Fantasma." },
  { num: 37, arc: "Yorknew City", title: "Batalla en la subasta", desc: "La Brigada Fantasma ataca la subasta desatando un caos absoluto en Yorknew City." },
  { num: 38, arc: "Yorknew City", title: "Poder de la cadena", desc: "Kurapika demuestra su habilidad Nen: cadenas creadas especialmente para atrapar a la Brigada." },
  { num: 39, arc: "Yorknew City", title: "Juicio", desc: "Kurapika captura a un miembro de la Brigada Fantasma y lo somete a un estricto interrogatorio." },
  { num: 40, arc: "Yorknew City", title: "Hechizo de la cadena", desc: "Las cadenas de Kurapika demuestran ser un arma letal y efectiva contra los miembros de la Brigada." },
  { num: 41, arc: "Yorknew City", title: "Guardaespaldas", desc: "Leorio se une a un grupo de guardaespaldas para proteger a una misteriosa cliente en la subasta." },
  { num: 42, arc: "Yorknew City", title: "Condición mortal", desc: "Kurapika impone severas condiciones a su poder para capturar a los miembros de la Brigada." },
  { num: 43, arc: "Yorknew City", title: "Luz de venganza", desc: "Kurapika finalmente se enfrenta cara a cara con los responsables de la muerte de su clan." },
  { num: 44, arc: "Yorknew City", title: "Sonido de cadenas", desc: "La batalla entre Kurapika y la Brigada Fantasma alcanza un punto crítico y decisivo." },
  { num: 45, arc: "Yorknew City", title: "Reunión", desc: "Los caminos de Gon, Killua, Kurapika y Leorio se cruzan nuevamente en Yorknew." },
  { num: 46, arc: "Yorknew City", title: "Deseo de Killua", desc: "Killua expresa su deseo de proteger a sus amigos sin importar el costo." },
  { num: 47, arc: "Yorknew City", title: "Enfrentamiento", desc: "Gon y Killua se enfrentan a un miembro de la Brigada Fantasma en un combate intenso." },
  { num: 48, arc: "Yorknew City", title: "Persecución", desc: "La Brigada Fantasma contraataca mientras Kurapika planea su próximo movimiento." },
  { num: 49, arc: "Yorknew City", title: "Estrategia", desc: "Gon y los demás idean un plan para enfrentarse a la Brigada Fantasma de una vez por todas." },
  { num: 50, arc: "Yorknew City", title: "Confrontación final", desc: "La batalla final en Yorknew City define el destino de Kurapika y la Brigada Fantasma." },
  { num: 51, arc: "Yorknew City", title: "Secuelas", desc: "Después de la batalla, cada personaje reflexiona sobre lo sucedido en Yorknew." },
  { num: 52, arc: "Yorknew City", title: "Nuevo rumbo", desc: "Gon y Killua deciden su próximo destino mientras Kurapika sigue su propio camino." },
  { num: 53, arc: "Greed Island", title: "Ciudad del juego", desc: "Gon y Killua escuchan rumores sobre un misterioso juego llamado Greed Island." },
  { num: 54, arc: "Greed Island", title: "Greed Island", desc: "Los chicos investigan sobre Greed Island, un juego creado por Ging, el padre de Gon." },
  { num: 55, arc: "Greed Island", title: "Comienzo del juego", desc: "Gon y Killua ingresan al mundo virtual de Greed Island listos para la aventura." },
  { num: 56, arc: "Greed Island", title: "Entrenamiento de Bisuke", desc: "Bisuke, una experimentada cazadora, se convierte en la maestra de Gon y Killua." },
  { num: 57, arc: "Greed Island", title: "Secreto del juego", desc: "Se revelan los misterios detrás de la creación de Greed Island y el objetivo real." },
  { num: 58, arc: "Greed Island", title: "Carta del padre", desc: "Gon encuentra una carta de Ging que le da pistas para completar el juego y encontrarlo." },
  { num: 59, arc: "Greed Island", title: "Poder de la amistad", desc: "Gon y Killua fortalecen su vínculo mientras superan juntos los desafíos de la isla." },
  { num: 60, arc: "Greed Island", title: "Desafío", desc: "Un nuevo y peligroso oponente aparece en Greed Island dispuesto a detenerlos." },
  { num: 61, arc: "Greed Island", title: "Batalla en la isla", desc: "Gon y Killua luchan contra poderosos enemigos usando sus habilidades Nen mejoradas." },
  { num: 62, arc: "Greed Island", title: "Camino a casa", desc: "La primera etapa de Greed Island llega a su fin con nuevas preguntas sin responder." },
  { num: 63, arc: "OVA 1 - Yorknew", title: "Retorno a Yorknew", desc: "La historia continúa mientras Gon y Killua regresan a Yorknew City por un nuevo encargo." },
  { num: 64, arc: "OVA 1 - Yorknew", title: "El acuerdo", desc: "Kurapika hace un trato peligroso con la Brigada Fantasma para proteger a sus amigos." },
  { num: 65, arc: "OVA 1 - Yorknew", title: "El precio de la venganza", desc: "Kurapika descubre que su venganza tiene un precio más alto de lo que imaginaba." },
  { num: 66, arc: "OVA 1 - Yorknew", title: "La condición final", desc: "Kurapika debe decidir entre la venganza y la vida de sus seres queridos." },
  { num: 67, arc: "OVA 1 - Yorknew", title: "El enfrentamiento", desc: "El enfrentamiento entre Kurapika y la Brigada Fantasma llega a un punto sin retorno." },
  { num: 68, arc: "OVA 1 - Yorknew", title: "Libertad", desc: "Kurapika finalmente encuentra la libertad al dejar atrás su sed de venganza." },
  { num: 69, arc: "OVA 1 - Yorknew", title: "Nuevos comienzos", desc: "Gon y Killua se preparan para su próximo gran desafío: Greed Island." },
  { num: 70, arc: "OVA 1 - Yorknew", title: "El juego espera", desc: "Con Yorknew atrás, Gon y Killua se enfocan completamente en Greed Island." },
  { num: 71, arc: "OVA 2 - Greed Island", title: "Regreso a Greed Island", desc: "Gon y Killua retoman su aventura en Greed Island con nuevas habilidades." },
  { num: 72, arc: "OVA 2 - Greed Island", title: "El torneo", desc: "Comienza un torneo dentro de Greed Island que pondrá a prueba a todos los jugadores." },
  { num: 73, arc: "OVA 2 - Greed Island", title: "Aliados y enemigos", desc: "Gon y Killua hacen nuevos aliados mientras enfrentan a jugadores hostiles." },
  { num: 74, arc: "OVA 2 - Greed Island", title: "Estrategia de juego", desc: "Los chicos desarrollan una estrategia para conseguir las cartas más raras del juego." },
  { num: 75, arc: "OVA 2 - Greed Island", title: "El guerrero misterioso", desc: "Un guerrero enmascarado desafía a Gon a un combate que pondrá a prueba su Nen." },
  { num: 76, arc: "OVA 2 - Greed Island", title: "Revelaciones", desc: "Se revelan más secretos sobre el verdadero propósito de Greed Island." },
  { num: 77, arc: "OVA 2 - Greed Island", title: "Batalla de cartas", desc: "Gon participa en una batalla donde las cartas del juego definen el combate." },
  { num: 78, arc: "OVA 2 - Greed Island", title: "La prueba final", desc: "Gon y Killua se enfrentan a la prueba más difícil de Greed Island." },
  { num: 79, arc: "OVA 3 - Greed Island Final", title: "El desafío final", desc: "Comienza la etapa final de Greed Island con desafíos cada vez más peligrosos." },
  { num: 80, arc: "OVA 3 - Greed Island Final", title: "Contraataque", desc: "Los jugadores restantes se unen para enfrentar la amenaza de los ladrones de cartas." },
  { num: 81, arc: "OVA 3 - Greed Island Final", title: "Poder absoluto", desc: "Gon descubre una nueva faceta de su Nen que le otorga un poder inmenso." },
  { num: 82, arc: "OVA 3 - Greed Island Final", title: "La batalla de los cazadores", desc: "Los mejores cazadores se enfrentan en una batalla campal dentro del juego." },
  { num: 83, arc: "OVA 3 - Greed Island Final", title: "El secreto del creador", desc: "Gon descubre más secretos sobre Ging a través de las pistas dejadas en el juego." },
  { num: 84, arc: "OVA 3 - Greed Island Final", title: "Alianza", desc: "Los jugadores forman una alianza temporal para derrotar a un enemigo común." },
  { num: 85, arc: "OVA 3 - Greed Island Final", title: "El guardián", desc: "Gon enfrenta al guardián de la última carta, una criatura de poder inimaginable." },
  { num: 86, arc: "OVA 3 - Greed Island Final", title: "Sacrificio", desc: "Uno de los aliados hace un sacrificio heroico para que el grupo pueda avanzar." },
  { num: 87, arc: "OVA 3 - Greed Island Final", title: "La última carta", desc: "Gon y Killua luchan por conseguir la última carta necesaria para completar el juego." },
  { num: 88, arc: "OVA 3 - Greed Island Final", title: "El premio final", desc: "Al completar Greed Island, Gon descubre cuál es el verdadero premio del juego." },
  { num: 89, arc: "OVA 3 - Greed Island Final", title: "Encuentro con Ging", desc: "Finalmente, Gon tiene la oportunidad de encontrarse con su padre Ging Freecss." },
  { num: 90, arc: "OVA 3 - Greed Island Final", title: "El legado de Ging", desc: "Ging revela a Gon la verdad sobre el propósito de los cazadores y el Nen." },
  { num: 91, arc: "OVA 3 - Greed Island Final", title: "Nuevo horizonte", desc: "Con Greed Island completado, Gon y Killua se preparan para nuevas aventuras." },
  { num: 92, arc: "OVA 3 - Greed Island Final", title: "Hasta siempre", desc: "La serie llega a su fin con Gon y Killua mirando hacia el futuro como cazadores." }
];

const VIDEO_PATH = 'https://pub-4f6ca4c749ad4cd681b348fc49148806.r2.dev/Videos/videos/';
const VIDEO_EXT = '.mp4';

function generateChapters() {
  const grid = document.getElementById('chaptersGrid');
  grid.innerHTML = '';
  chapters.forEach((ch, index) => {
    const card = document.createElement('div');
    card.className = 'chapter-card';
    card.style.animationDelay = `${index * 0.04}s`;
    card.innerHTML = `
      <span class="chapter-number">Ep. ${ch.num}</span>
      <span style="display:inline-block;padding:3px 10px;border-radius:12px;background:rgba(255,107,0,0.1);color:var(--orange-primary);font-size:0.68rem;font-weight:600;margin-left:6px;">${ch.arc}</span>
      <h3>${ch.title}</h3>
      <p>${ch.desc}</p>
      <a href="#" class="chapter-link play-btn" data-num="${ch.num}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5,3 19,12 5,21"/></svg>
        Reproducir
      </a>
    `;
    grid.appendChild(card);
  });

  document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const num = parseInt(btn.getAttribute('data-num'));
      playEpisode(num);
    });
  });
}

function playEpisode(num) {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('videoPlayer');
  const title = document.getElementById('videoTitle');
  const error = document.getElementById('videoError');
  const expectedFile = document.getElementById('expectedFile');

  const ep = chapters.find(c => c.num === num);
  const filename = `ep${String(num).padStart(2, '0')}${VIDEO_EXT}`;
  const filepath = VIDEO_PATH + filename;

  title.textContent = `Episodio ${num}: ${ep ? ep.title : ''}`;
  expectedFile.textContent = filename;
  error.classList.remove('show');

  player.muted = false;
  player.volume = 1;
  player.src = filepath;
  player.load();

  modal.classList.add('show');

  const audioWarning = document.getElementById('audioWarning');
  audioWarning.classList.remove('show');

  player.onerror = (e) => {
    const err = player.error;
    let msg = '';
    if (err) {
      switch (err.code) {
        case MediaError.MEDIA_ERR_ABORTED: msg = 'Reproducción abortada'; break;
        case MediaError.MEDIA_ERR_NETWORK: msg = 'Error de red (posiblemente CORS o bucket privado)'; break;
        case MediaError.MEDIA_ERR_DECODE: msg = 'Error al decodificar el video'; break;
        case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED: msg = 'Formato no soportado'; break;
      }
    }
    error.querySelector('span').textContent = msg
      ? `Error: ${msg} — Verificá que el bucket R2 sea público y tenga CORS habilitado.`
      : 'No se pudo cargar el video. Verificá que el bucket R2 sea público y los archivos existan.';
    error.classList.add('show');
  };

  player.oncanplay = () => {
    error.classList.remove('show');
    player.play().catch(() => {});
  };

  let audioChecked = false;
  player.onplay = () => {
    if (audioChecked) return;
    audioChecked = true;
    setTimeout(() => {
      const hasAudio = (
        (player.audioTracks && player.audioTracks.length > 0) ||
        (player.mozHasAudio) ||
        (player.webkitAudioDecodedByteCount > 0)
      );
      if (!hasAudio) {
        audioWarning.classList.add('show');
      }
    }, 2000);
  };
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('videoClose').addEventListener('click', closeVideo);
  document.getElementById('videoOverlay').addEventListener('click', closeVideo);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideo();
  });

  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('open');
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
      hamburger.classList.remove('active');
      nav.classList.remove('open');
    }
  });
});

function closeVideo() {
  const modal = document.getElementById('videoModal');
  const player = document.getElementById('videoPlayer');
  modal.classList.remove('show');
  player.pause();
  player.src = '';
}

function switchSection(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const section = document.getElementById(sectionId);
  if (section) section.classList.add('active');
  const link = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
  if (link) link.classList.add('active');
  closeSearch();
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    switchSection(link.getAttribute('data-section'));
  });
});

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

function performSearch(query) {
  if (!query.trim()) {
    searchResults.classList.remove('show');
    return;
  }

  const q = query.toLowerCase();
  const results = [];

  if (q.includes('contacto') || q.includes('contact')) {
    results.push({
      type: 'contact', title: 'Contacto',
      desc: 'Información del creador de la página', section: 'contacto'
    });
  }

  chapters.forEach(ch => {
    const match = ch.title.toLowerCase().includes(q) ||
                  ch.desc.toLowerCase().includes(q) ||
                  ch.arc.toLowerCase().includes(q) ||
                  `episodio ${ch.num}`.includes(q) ||
                  `ep ${ch.num}`.includes(q) ||
                  `${ch.num}` === q;
    if (match) {
      results.push({
        type: 'episode', title: `Ep. ${ch.num}: ${ch.title}`,
        desc: ch.desc, section: 'capitulos', num: ch.num
      });
    }
  });

  if (results.length > 0) {
    searchResults.innerHTML = results.map(r => {
      if (r.type === 'contact') {
        return `<div class="search-result-item" data-section="${r.section}">
          <div class="result-icon contact">C</div>
          <div class="result-info"><h4>${r.title}</h4><p>${r.desc}</p></div>
        </div>`;
      }
      return `<div class="search-result-item" data-section="${r.section}" data-ep="${r.num}">
        <div class="result-icon episode">EP</div>
        <div class="result-info"><h4>${r.title}</h4><p>${r.desc}</p></div>
      </div>`;
    }).join('');
    searchResults.classList.add('show');

    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const section = item.getAttribute('data-section');
        const ep = item.getAttribute('data-ep');
        searchInput.value = '';
        searchResults.classList.remove('show');
        if (section === 'contacto') {
          switchSection('contacto');
        } else {
          switchSection('capitulos');
          if (ep) {
            setTimeout(() => {
              const btn = document.querySelector(`.play-btn[data-num="${ep}"]`);
              if (btn) btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
          }
        }
      });
    });
  } else {
    searchResults.innerHTML = `<div class="search-result-item" style="cursor:default;">
      <div class="result-info"><h4 style="color:var(--text-muted);">Sin resultados</h4>
      <p>Intenta con otro término o escribe "Contacto"</p></div>
    </div>`;
    searchResults.classList.add('show');
  }
}

searchInput.addEventListener('input', () => performSearch(searchInput.value));
searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') performSearch(searchInput.value); });
document.getElementById('searchBtn').addEventListener('click', () => performSearch(searchInput.value));

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-container')) closeSearch();
});

function closeSearch() { searchResults.classList.remove('show'); }

const chapterFilter = document.getElementById('chapterFilter');
if (chapterFilter) {
  chapterFilter.addEventListener('input', () => {
    const q = chapterFilter.value.toLowerCase();
    document.querySelectorAll('.chapter-card').forEach(card => {
      card.style.display = card.textContent.toLowerCase().includes(q) ? 'block' : 'none';
    });
  });
}

function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDuration = `${12 + Math.random() * 18}s`;
    p.style.animationDelay = `${Math.random() * 8}s`;
    p.style.width = `${2 + Math.random() * 3}px`;
    p.style.height = p.style.width;
    const colors = ['var(--green-primary)', 'var(--orange-primary)', 'var(--text-primary)'];
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(p);
  }
}

const defaultColors = {
  bg: '#0a0a0a', green: '#2ecc71', orange: '#ff6b00', text: '#f0f0f0'
};

const themes = {
  hunter: { bg: '#0a0a0a', green: '#2ecc71', orange: '#ff6b00', text: '#f0f0f0' },
  dark: { bg: '#000000', green: '#00ff88', orange: '#ff4400', text: '#cccccc' },
  neon: { bg: '#0a0015', green: '#00ffcc', orange: '#ff00ff', text: '#ffffff' },
  fire: { bg: '#0a0500', green: '#ff8800', orange: '#ff2200', text: '#ffe0c0' }
};

function applyColors(colors) {
  document.documentElement.style.setProperty('--bg-primary', colors.bg);
  document.documentElement.style.setProperty('--bg-secondary', colors.bg === '#000000' ? '#0a0a0a' : darken(colors.bg, 5));
  document.documentElement.style.setProperty('--green-primary', colors.green);
  document.documentElement.style.setProperty('--green-secondary', darken(colors.green, 10));
  document.documentElement.style.setProperty('--green-dark', colors.bg === '#0a0a0a' ? '#0f2e1a' : colors.bg === '#000000' ? '#003300' : '#1a2030');
  document.documentElement.style.setProperty('--orange-primary', colors.orange);
  document.documentElement.style.setProperty('--orange-secondary', darken(colors.orange, 10));
  document.documentElement.style.setProperty('--text-primary', colors.text);
  document.documentElement.style.setProperty('--green-glow', hexToRgba(colors.green, 0.25));
  document.documentElement.style.setProperty('--orange-glow', hexToRgba(colors.orange, 0.25));
  document.documentElement.style.setProperty('--text-secondary', colors.text === '#f0f0f0' ? '#aaaaaa' : colors.text === '#ffffff' ? '#bbbbbb' : '#999999');

  document.getElementById('colorBg').value = colors.bg;
  document.getElementById('colorGreen').value = colors.green;
  document.getElementById('colorOrange').value = colors.orange;
  document.getElementById('colorText').value = colors.text;

  saveTheme(colors);
}

function darken(hex, amount) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.max(0, (num >> 16) - amount);
  const g = Math.max(0, ((num >> 8) & 0x00FF) - amount);
  const b = Math.max(0, (num & 0x0000FF) - amount);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

function hexToRgba(hex, alpha) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = num >> 16, g = (num >> 8) & 0xFF, b = num & 0xFF;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function saveTheme(colors) {
  try {
    localStorage.setItem('hxh_theme', JSON.stringify(colors));
  } catch(e) {}
}

function loadTheme() {
  try {
    const saved = localStorage.getItem('hxh_theme');
    if (saved) {
      const colors = JSON.parse(saved);
      applyColors(colors);
      return true;
    }
  } catch(e) {}
  return false;
}

document.addEventListener('DOMContentLoaded', () => {
  generateChapters();
  createParticles();
  if (!loadTheme()) applyColors(defaultColors);

  document.getElementById('themeToggle').addEventListener('click', () => {
    document.getElementById('themePanel').classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.theme-panel') && !e.target.closest('#themeToggle')) {
      document.getElementById('themePanel').classList.remove('show');
    }
  });

  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const theme = themes[btn.getAttribute('data-theme')];
      if (theme) applyColors(theme);
    });
  });

  document.getElementById('colorBg').addEventListener('input', (e) => {
    const current = getCurrentColors();
    current.bg = e.target.value;
    applyColors(current);
    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
  });

  document.getElementById('colorGreen').addEventListener('input', (e) => {
    const current = getCurrentColors();
    current.green = e.target.value;
    applyColors(current);
    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
  });

  document.getElementById('colorOrange').addEventListener('input', (e) => {
    const current = getCurrentColors();
    current.orange = e.target.value;
    applyColors(current);
    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
  });

  document.getElementById('colorText').addEventListener('input', (e) => {
    const current = getCurrentColors();
    current.text = e.target.value;
    applyColors(current);
    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
  });

  document.getElementById('resetColors').addEventListener('click', () => {
    applyColors(defaultColors);
    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.preset-btn[data-theme="hunter"]').classList.add('active');
  });
});

function getCurrentColors() {
  const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary').trim();
  const green = getComputedStyle(document.documentElement).getPropertyValue('--green-primary').trim();
  const orange = getComputedStyle(document.documentElement).getPropertyValue('--orange-primary').trim();
  const text = getComputedStyle(document.documentElement).getPropertyValue('--text-primary').trim();
  return { bg, green, orange, text };
}
