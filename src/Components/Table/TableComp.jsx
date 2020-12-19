import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  simpanan,
  simpananCreate,
  simpananDelete,
  simpananUpdate,
} from 'utils/redux';
import {
  Table,
  Jumbotron,
  Container,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import LoadingComponent from 'Components/Loading/LoadingComponent';
import ErrorComponent from 'Components/Error/ErrorComponent';

const TableComp = () => {
  const loading = useSelector((state) => state.simpanan.loading);
  const error = useSelector((state) => state.simpanan.error);
  const _simpanan = useSelector((state) => state.simpanan.simpanan);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(simpanan());
  }, [dispatch]);

  const [Form, setForm] = useState({ type: '' });

  const [submit, setSubmit] = useState({
    id: Form.type === 'update' ? Form.id : '',
    tanggal: Form.type === 'update' ? Form.tanggal : '',
    anggota: Form.type === 'update' ? Form.anggota : '',
    s_pokok: Form.type === 'update' ? Form.s_pokok : '',
    s_wajib: Form.type === 'update' ? Form.s_wajib : '',
    s_sukarela: Form.type === 'update' ? Form.s_sukarela : '',
  });

  const [modal, setModal] = useState(false);

  const createButton = () => {
    setForm({ type: 'create' });
    setSubmit({});
    setModal(!modal);
  };
  const updateButton = (id, data) => {
    setForm({
      type: 'update',
    });
    setSubmit({
      ...submit,
      id: id,
      tanggal: data.tanggal,
      anggota: data.anggota,
      s_pokok: data.s_pokok,
      s_wajib: data.s_wajib,
      s_sukarela: data.s_sukarela,
    });
    setModal(!modal);
  };
  const deleteButton = (id) => {
    dispatch(simpananDelete(id));
    setTimeout(() => {
      dispatch(simpanan());
      alert('success delete data');
    }, 500);
  };
  const buttonSubmit = (submit) => {
    Form.type === 'update'
      ? dispatch(
          simpananUpdate(submit.id, {
            tanggal: submit.tanggal,
            anggota: submit.anggota,
            s_pokok: submit.s_pokok,
            s_wajib: submit.s_wajib,
            s_sukarela: submit.s_sukarela,
          })
        )
      : dispatch(
          simpananCreate({
            tanggal: submit.tanggal,
            anggota: submit.anggota,
            s_pokok: submit.s_pokok,
            s_wajib: submit.s_wajib,
            s_sukarela: submit.s_sukarela,
          })
        );
  };
  return (
    <>
      <Modal isOpen={modal} toggle={createButton}>
        <ModalBody>
          <FormGroup>
            <Label for="tanggal">Tanggal</Label>
            <Input
              type="tanggal"
              name="tanggal"
              id="tanggal"
              value={submit.tanggal}
              onChange={(e) =>
                setSubmit({ ...submit, tanggal: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="anggota">Anggota</Label>
            <Input
              type="anggota"
              name="anggota"
              id="anggota"
              value={submit.anggota}
              onChange={(e) =>
                setSubmit({ ...submit, anggota: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="s_pokok">Simpanan Pokok</Label>
            <Input
              type="s_pokok"
              name="s_pokok"
              id="s_pokok"
              value={submit.s_pokok}
              onChange={(e) =>
                setSubmit({ ...submit, s_pokok: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="s_wajib">Simpanan Wajib</Label>
            <Input
              type="s_wajib"
              name="s_wajib"
              id="s_wajib"
              value={submit.s_wajib}
              onChange={(e) =>
                setSubmit({ ...submit, s_wajib: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="s_sukarela">Simpanan Sukarela</Label>
            <Input
              type="s_sukarela"
              name="s_sukarela"
              id="s_sukarela"
              value={submit.s_sukarela}
              onChange={(e) =>
                setSubmit({ ...submit, s_sukarela: e.target.value })
              }
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              buttonSubmit(submit);
              setTimeout(() => {
                dispatch(simpanan());
                setModal(!modal);
                alert(`success ${Form.type} data`);
              }, 500);
            }}>
            {Form.type === 'update' ? 'Perbarui' : 'Tambah'}
          </Button>{' '}
          <Button color="secondary" onClick={createButton}>
            Batal
          </Button>
        </ModalFooter>
      </Modal>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-5">Tabel Simpanan</h1>
        </Container>
      </Jumbotron>
      <Button
        color="primary"
        size="md"
        block
        onClick={createButton}
        style={{ marginBottom: 20 }}>
        Tambah Data
      </Button>
      {error ? (
        <ErrorComponent />
      ) : loading ? (
        <LoadingComponent />
      ) : (
        _simpanan &&
        Array.isArray(_simpanan.data) && (
          <Table responsive>
            <thead style={{ textAlign: 'center' }}>
              <tr>
                <th>Tanggal</th>
                <th>Anggota</th>
                <th>Simpanan Pokok</th>
                <th>Simpanan Wajib</th>
                <th>Simpanan Sukarela</th>
                <th colSpan="2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {_simpanan.data.map((item) => {
                return (
                  <tr key={item._id}>
                    <th scope="row" style={{ textAlign: 'center' }}>
                      {item.tanggal}
                    </th>
                    <td>{item.anggota}</td>
                    <td>{item.s_pokok}</td>
                    <td>{item.s_wajib}</td>
                    <td>{item.s_sukarela}</td>
                    <td style={{ textAlign: 'center' }}>
                      <Button
                        color="warning"
                        size="sm"
                        onClick={() =>
                          updateButton(item._id, {
                            id: item._id,
                            tanggal: item.tanggal,
                            anggota: item.anggota,
                            s_pokok: item.s_pokok,
                            s_wajib: item.s_wajib,
                            s_sukarela: item.s_sukarela,
                          })
                        }>
                        Ubah
                      </Button>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <Button
                        color="danger"
                        size="sm"
                        onClick={() => deleteButton(item._id)}>
                        Hapus
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )
      )}
    </>
  );
};

export default TableComp;
