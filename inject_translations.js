const fs = require('fs');

const missingEs = {
  app_title: "Iatf Pro",
  by_solugan: "por Solugan SG",
  auth_register_title: "Registro de Usuario",
  auth_nit: "Identificación (NIT o C.C.)",
  auth_name: "Nombre Completo",
  auth_country: "País",
  auth_phone: "Teléfono",
  auth_farm: "Nombre de Finca o Proyecto",
  auth_email: "Correo Electrónico",
  auth_pass: "Contraseña",
  auth_login_link: "¿Ya tienes cuenta? Inicia sesión",
  auth_register_link: "¿No tienes cuenta? Regístrate aquí",
  sidebar_active_user: "Usuario Activo",
  config_delete_all: "ELIMINAR TODOS",
  config_th_protocol: "Protocolo",
  config_th_obs: "Observaciones",
  config_th_actions: "Acciones",
  und_ml: "ml / Und",
  resx1_prot: "Protocolo Resincronización 1",
  resx1_date_auto: "Fecha Inicio (Auto)",
  resx1_time: "Hora de Inicio",
  resx1_preg: "Preñeces Resincronización 1 (Proyectado o Real)",
  btn_ajustar_precios: "AJUSTAR PRECIOS",
  btn_reiniciar_fase: "REINICIAR FASE",
  table_th_day: "Día",
  table_th_date: "Fecha",
  table_th_time: "Hora",
  table_th_hormone: "Hormona / Insumo",
  table_th_dose: "Dosis",
  table_th_value: "Valor",
  resx2_prot: "Protocolo Resincronización 2",
  resx2_preg: "Preñeces Resincronización 2 (Proyectado o Real)",
  dash_pi: "Protocolo Inicial (PI)",
  admin_loading_data: "Cargando datos...",
  aliados_contact_wa: "Contactar por WhatsApp"
};

const missingEn = {
  app_title: "Iatf Pro",
  by_solugan: "by Solugan SG",
  auth_register_title: "User Registration",
  auth_nit: "ID (NIT or SSN)",
  auth_name: "Full Name",
  auth_country: "Country",
  auth_phone: "Phone",
  auth_farm: "Farm or Project Name",
  auth_email: "Email",
  auth_pass: "Password",
  auth_login_link: "Already have an account? Log in",
  auth_register_link: "Don't have an account? Register here",
  sidebar_active_user: "Active User",
  config_delete_all: "DELETE ALL",
  config_th_protocol: "Protocol",
  config_th_obs: "Observations",
  config_th_actions: "Actions",
  und_ml: "ml / Unit",
  resx1_prot: "Resynchronization 1 Protocol",
  resx1_date_auto: "Start Date (Auto)",
  resx1_time: "Start Time",
  resx1_preg: "Resync 1 Pregnancies (Projected or Real)",
  btn_ajustar_precios: "ADJUST PRICES",
  btn_reiniciar_fase: "RESET PHASE",
  table_th_day: "Day",
  table_th_date: "Date",
  table_th_time: "Time",
  table_th_hormone: "Hormone / Input",
  table_th_dose: "Dose",
  table_th_value: "Value",
  resx2_prot: "Resynchronization 2 Protocol",
  resx2_preg: "Resync 2 Pregnancies (Projected or Real)",
  dash_pi: "Initial Protocol (IP)",
  admin_loading_data: "Loading data...",
  aliados_contact_wa: "Contact via WhatsApp"
};

const missingPt = {
  app_title: "Iatf Pro",
  by_solugan: "por Solugan SG",
  auth_register_title: "Registro de Usuário",
  auth_nit: "Identificação (CPF ou CNPJ)",
  auth_name: "Nome Completo",
  auth_country: "País",
  auth_phone: "Telefone",
  auth_farm: "Nome da Fazenda ou Projeto",
  auth_email: "E-mail",
  auth_pass: "Senha",
  auth_login_link: "Já tem uma conta? Faça login",
  auth_register_link: "Não tem uma conta? Registre-se aqui",
  sidebar_active_user: "Usuário Ativo",
  config_delete_all: "APAGAR TODOS",
  config_th_protocol: "Protocolo",
  config_th_obs: "Observações",
  config_th_actions: "Ações",
  und_ml: "ml / Unid",
  resx1_prot: "Protocolo de Ressincronização 1",
  resx1_date_auto: "Data de Início (Auto)",
  resx1_time: "Hora de Início",
  resx1_preg: "Prenhezes Ressincronização 1 (Projetado ou Real)",
  btn_ajustar_precios: "AJUSTAR PREÇOS",
  btn_reiniciar_fase: "REINICIAR FASE",
  table_th_day: "Dia",
  table_th_date: "Data",
  table_th_time: "Hora",
  table_th_hormone: "Hormônio / Insumo",
  table_th_dose: "Dose",
  table_th_value: "Valor",
  resx2_prot: "Protocolo de Ressincronização 2",
  resx2_preg: "Prenhezes Ressincronização 2 (Projetado ou Real)",
  dash_pi: "Protocolo Inicial (PI)",
  admin_loading_data: "Carregando dados...",
  aliados_contact_wa: "Contatar pelo WhatsApp"
};

let js = fs.readFileSync('iatf-app.js', 'utf8');

function injectBlock(lang, obj) {
  const startStr = `${lang}: {`;
  let idx = js.indexOf(startStr);
  if (idx !== -1) {
    let injection = '';
    for (const [key, val] of Object.entries(obj)) {
      injection += `    ${key}: "${val}",\n`;
    }
    js = js.substring(0, idx + startStr.length) + '\n' + injection + js.substring(idx + startStr.length);
  }
}

injectBlock('es', missingEs);
injectBlock('en', missingEn);
injectBlock('pt', missingPt);

fs.writeFileSync('iatf-app.js', js, 'utf8');
console.log('Translations injected successfully.');
